import { useState, useEffect, useContext } from 'react';
import { Context } from '../context/context';
import axios from 'axios';
import { useApi } from './../hooks';
import { useForm } from 'react-hook-form';

export const useMyAds = () => {
  const { state, dispatch } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const { getBrands, getModels, getExtras } = useApi();
  const [myAds, setMyAds] = useState([]);
  const [step, setStep] = useState('active');
  const [postAdState, setPostAdState] = useState({});
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [extras, setExtras] = useState([]);

  // TODO zmenit linku na /moje-inzeraty
  const getMyAds = () => {
    fetch(`${state.api}/my-ads/${state.user.id}`)
      .then((res) => res.json())
      .then((json) => {
        setMyAds(json);
      });
  };

  useEffect(() => {
    if (!state.user) {
      document.location.href = '/';
    } else {
      getMyAds();
    }
  }, []);

  useEffect(() => {
    getBrands(setBrands);
  }, []);

  useEffect(() => {
    getModels(setModels, postAdState.brand);
  }, [postAdState.brand]);

  useEffect(() => {
    getExtras(setExtras);
  }, []);

  function handleChange(event) {
    setPostAdState({
      ...postAdState,
      [event.target.name]: event.target.value,
    });
  }

  const handleRemove = (id) => {
    alert = confirm(
      'Po odstránení bude inzerát nenávratne preč, prajete si pokračovať?'
    );

    if (alert) {
      axios
        .post(
          `${state.api}/inzerat/remove`,
          {
            id: id,
            token: state.user.token,
          },
          {
            headers: {
              token: state.user.token,
            },
          }
        )
        .then((response) => {
          if (response.data.error) {
            dispatch({
              type: 'SET_MESSAGE',
              message: {
                type: 'warning',
                message: response.data.error,
              },
            });
          } else {
            getMyAds();
            dispatch({
              type: 'SET_MESSAGE',
              message: {
                type: 'success',
                message: response.data.success,
              },
            });
          }
        });
    }
  };

  const handleActive = (id, action) => {
    let alertMessage = '';
    if (action === 'deactive') {
      alertMessage = 'Určite deaktivovať inzerát?';
    } else {
      alertMessage = 'Určite aktivivať inzerát?';
    }
    const alert = confirm(alertMessage);

    if (alert) {
      axios
        .post(
          `${state.api}/inzerat/active-handler`,
          {
            id: id,
            action: action,
          },
          {
            headers: {
              token: state.user.token,
            },
          }
        )
        .then((response) => {
          if (response.data.error) {
            dispatch({
              type: 'SET_MESSAGE',
              message: {
                type: 'warning',
                message: response.data.error,
              },
            });
          } else {
            getMyAds();
            dispatch({
              type: 'SET_MESSAGE',
              message: {
                type: 'success',
                message: response.data.success,
              },
            });
          }
        });
    }
  };

  const handleEdit = (id, step) => {
    fetch(`${state.api}/inzerat/${id}`)
      .then((res) => res.json())
      .then((json) => {
        const adExtras = json.extras.map((extra) => extra.extra_id);
        json.adExtras = adExtras;
        json.brand = json.brand_id;
        json.model = json.model_id;
        json.aid = json.id;
        json.userId = state.user.id;
        setPostAdState(json);
        setStep(step);
      });
  };

  function handleExtrasChange(event) {
    const index = postAdState.adExtras.indexOf(event.target.name);
    if (index > -1) {
      postAdState.adExtras.splice(index, 1);
      setPostAdState({
        ...postAdState,
        adExtras: postAdState.adExtras,
      });
    } else {
      setPostAdState({
        ...postAdState,
        adExtras: [...postAdState.adExtras, event.target.name],
      });
    }
  }

  const onSubmit = (data) => {
    axios
      .post(`${state.api}/save-ad`, postAdState, {
        headers: { token: state.user.token },
      })
      .then((response) => {
        if (response.status === 200) {
          setPostAdState({
            ...postAdState,
            aid: response.data,
          });
          getMyAds();
          setStep('active');
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

  return {
    myAds,
    step,
    setStep,
    state,
    brands,
    models,
    extras,
    handleRemove,
    handleActive,
    handleEdit,
    postAdState,
    setPostAdState,
    handleChange,
    register,
    handleSubmit,
    errors,
    handleExtrasChange,
    onSubmit,
  };
};
