import { useContext, useEffect } from 'react';
import { Context } from './../context/context';
import axios from 'axios';
import { useRouter } from 'next/router';

export const useFilter = () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const collapse = state.config.toggleFilter;
  const brands = state.brands;
  const models = state.models;
  const filter = state.filter;

  useEffect(() => {
    fetch(`${state.api}/filter/brands`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: 'SET_BRANDS', brands: json });
      });
  }, []);

  useEffect(() => {
    if (filter.brand !== '') {
      fetch(`${state.api}/filter/models/${filter.brand}`)
        .then((res) => res.json())
        .then((json) => {
          dispatch({ type: 'SET_MODELS', models: json });
        });
    }
  }, [filter.brand]);

  function handleChange(event) {
    dispatch({
      type: 'SET_FILTER',
      event: { name: event.target.name, value: event.target.value },
    });
  }

  function handleSubmitFilter() {
    axios
      .post(`${state.api}/filter`, filter)
      .then((response) => {
        if (response.status === 200 && response.data.data.length !== 0) {
          dispatch({ type: 'SET_ADS', ads: response.data });
          dispatch({ type: 'TOGGLE_FILTER', toogle: false });
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
  }

  return {
    collapse,
    brands,
    models,
    filter,
    handleChange,
    handleSubmitFilter,
    dispatch,
  };
};
