import { FC, useContext } from 'react';
import { Context } from '../context/context';
import Cookies from 'js-cookie';
import { Favorite } from 'helpers/types';

export const useFavorites = (props: Favorite) => {
  const { dispatch } = useContext(Context);

  const addToFavorites = () => {
    const favoritesCookie = Cookies.getJSON('fav');
    let favorites = [];
    if (favoritesCookie) {
      favorites = favoritesCookie;
    }

    favorites.push(props);
    Cookies.set('fav', favorites, { expires: 365 });

    dispatch({
      type: 'ADD_TO_FAVORITES',
      ad: props,
    });
  };

  const removeFavorites = (id: number) => {
    const favoritesCookie = Cookies.getJSON('fav');
    const newFav = favoritesCookie.filter((item) => item.id != id);
    Cookies.set('fav', newFav, { expires: 365 });
    dispatch({ type: 'REMOVE_ITEM_FROM_FAVORITES', id: id });
  };

  return {
    addToFavorites,
    removeFavorites,
  };
};
