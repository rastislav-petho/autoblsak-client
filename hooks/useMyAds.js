import { useState, useEffect, useContext } from 'react';
import { Context } from '../context/context';
import axios from 'axios';

export const useMyAds = () => {
  const { state, dispatch } = useContext(Context);
  const [myAds, setMyAds] = useState([]);
  const [step, setStep] = useState('active');

  const getMyAds = () => {
    fetch(`${state.api}/my-ads/${state.user.id}`)
      .then(res => res.json())
      .then(json => {
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

  const handleRemove = id => {
    alert = confirm(
      'Po odstránení bude inzerát nenávratne preč, prajete si pokračovať?'
    );

    if (alert) {
      axios.post(`${state.api}/ad/remove`, { id: id }).then(response => {
        if (response.data.error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: response.data.error
            }
          });
        } else {
          getMyAds();
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'success',
              message: response.data.success
            }
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
        .post(`${state.api}/ad/active-handler`, { id: id, action: action })
        .then(response => {
          if (response.data.error) {
            dispatch({
              type: 'SET_MESSAGE',
              message: {
                type: 'warning',
                message: response.data.error
              }
            });
          } else {
            getMyAds();
            dispatch({
              type: 'SET_MESSAGE',
              message: {
                type: 'success',
                message: response.data.success
              }
            });
          }
        });
    }
  };

  return {
    myAds,
    step,
    setStep,
    state,
    handleRemove,
    handleActive
  };
};
