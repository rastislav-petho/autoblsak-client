import React, { useReducer, createContext } from 'react';
import reducer from './../reducer/reducer';
import Cookies from 'js-cookie';

export const Context = createContext();

export const ContextProvider = (props) => {
  const user = Cookies.getJSON('user');
  const theme = Cookies.get('theme');
  const favorites = Cookies.getJSON('fav');

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
      loading: true,
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
