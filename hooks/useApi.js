import { useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Context } from './../context/context';
import Cookies from 'js-cookie';

export const useApi = () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();

  const auth = (data) => {
    axios
      .post(`${state.api}/login`, data)
      .then((response) => {
        if (response.status === 200 && response.data.id) {
          Cookies.set('user', response.data, { expires: 7 });
          dispatch({ type: 'LOGIN', user: response.data });
          router.push('/');
        } else if (response.status === 203) {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'danger', message: response.data.error },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  const logout = () => {
    Cookies.remove('user');
    dispatch({ type: 'LOGOUT' });
    router.push('/login');
    // axios
    //   .post(
    //     `${state.api}/logout`,
    //     { id: state.user.id },
    //     {
    //       headers: {
    //         token: state.user.token,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     if (response.status === 200 && response.data.success) {

    //     } else if (response.status === 200 && response.data.error) {
    //       dispatch({
    //         type: 'SET_MESSAGE',
    //         message: { type: 'warning', message: response.data.error },
    //       });
    //     }
    //   })
    //   .then((error) => {
    //     if (error) {
    //       dispatch({
    //         type: 'SET_MESSAGE',
    //         message: {
    //           type: 'warning',
    //           message: 'Chyba! Kontaktujte administrátora',
    //         },
    //       });
    //     }
    //   });
  };

  const changePassword = (data) => {
    data = { ...data, userId: state.user.id };
    axios
      .post(`${state.api}/change-password`, data, {
        headers: { token: state.user.token },
      })
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'success', message: response.data.success },
          });

          logout();
        } else if (response.status === 200 && response.data.warning) {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'warning', message: response.data.warning },
          });
        } else {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'danger', message: response.data.error },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  const editAccount = (data) => {
    axios
      .post(`${state.api}/edit-account`, data, {
        headers: { token: state.user.token },
      })
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'success', message: response.data.success },
          });
        } else {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'danger', message: response.data.error },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  const deactiveAccount = () => {
    axios
      .post(
        `${state.api}/deactive-account`,
        {
          userId: state.user.id,
        },
        { headers: { token: state.user.token } }
      )
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'success', message: response.data.success },
          });

          logout();
        } else {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'danger', message: response.data.error },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  const registration = (data) => {
    axios
      .post(`${state.api}/register`, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'success',
              message: `Na e-mailovú adresu ${response.data.email} sme odoslali verifikačný link, na ktorý klikom dokončíte Vašu registráciu.`,
            },
          });
          router.push('/');
        } else {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'danger', message: response.data.error },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  const filter = () => {
    axios
      .post(`${state.api}/filter`, state.filter)
      .then((response) => {
        if (response.status === 200 && response.data.data.length !== 0) {
          dispatch({ type: 'SET_ADS', ads: response.data });
          dispatch({ type: 'TOGGLE_FILTER', toogle: false });
          dispatch({ type: 'HANDLE_LOADING', loading: false });
        } else {
          dispatch({ type: 'HANDLE_LOADING', loading: false });
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Pre zvolený filter sa nenašli žiadne výsledky.',
            },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  const adPagination = (move) => {
    dispatch({ type: 'HANDLE_LOADING', loading: true });
    axios
      .post(
        `${state.api}/filter?page=${
          move ? state.ads.current_page + 1 : state.ads.current_page - 1
        }`,
        state.filter
      )
      .then((response) => {
        if (response.status === 200 && response.data.length !== 0) {
          dispatch({ type: 'SET_ADS', ads: response.data });
          dispatch({ type: 'HANDLE_LOADING', loading: false });
        } else {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Pre zvolený filter sa nenašli žiadne výsledky.',
            },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  const getBrands = (setBrands) => {
    fetch(`${state.api}/filter/brands`)
      .then((res) => res.json())
      .then((json) => {
        setBrands(json);
      });
  };

  const getModels = (setModels, brand) => {
    fetch(`${state.api}/filter/models/${brand}`)
      .then((res) => res.json())
      .then((json) => {
        setModels(json);
      });
  };

  const getExtras = (setExtras) => {
    fetch(`${state.api}/extras`)
      .then((res) => res.json())
      .then((json) => {
        setExtras(json);
      });
  };

  const newsletter = (data) => {
    axios
      .post(`${state.api}/newsletter`, data)
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'success', message: response.data.success },
          });
        } else if (response.status === 200 && response.data.warning) {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'warning', message: response.data.warning },
          });
        } else {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'danger', message: response.data.error },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  return {
    auth,
    logout,
    changePassword,
    deactiveAccount,
    registration,
    filter,
    adPagination,
    getBrands,
    getModels,
    getExtras,
    editAccount,
    newsletter,
  };
};
