import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Context } from './../context/context';
import { getFilterQueryUrl, scrollToTop } from '../helpers';

export const useFilter = () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const collapse = state.config.toggleFilter;
  const brands = state.brands;
  const models = state.models;
  const filter = state.filter;
  const [queryObject, url] = getFilterQueryUrl(filter, state.api);

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
    let value = event.target.value;
    if (value === '') {
      value = undefined;
    }
    dispatch({
      type: 'SET_FILTER',
      event: { name: event.target.name, value: value },
    });
  }

  function handleSubmitFilter(event) {
    event.preventDefault();
    dispatch({ type: 'HANDLE_LOADING', loading: true });
    router.push({
      pathname: '/',
      query: queryObject,
    });
    scrollToTop();
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
