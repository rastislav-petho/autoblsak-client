import React, { useReducer, createContext } from 'react';
import reducer from './../reducer/reducer';
import { getCookie } from './../helpers/helpers';

export const Context = createContext();

export const ContextProvider = (props) => {
  const user = getCookie('user');
  const theme = getCookie('theme');
  const favorites = getCookie('fav');

  const initialState = {
    language: 'sk',
    url: 'https://autoblsak.sk',
    api: 'https://autoblsak.sk/api/api',
    user: user,
    theme: theme ? theme : 'light',
    ads: [],
    favoriteAds: favorites ? favorites : [],
    message: {
      type: null,
      message: null,
    },
    config: {
      toggleFilter: false,
      toggleFavorites: false,
    },
    filter: {
      category: '1',
      brand: '',
      model: '',
      fuel: '',
      transmision: '',
      color: '',
      yearFrom: '',
      yearTo: '',
      priceFrom: '',
      priceTo: '',
      kmFrom: '',
      kmTo: '',
      powerFrom: '',
      powerTo: '',
    },
    brands: [],
    models: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
