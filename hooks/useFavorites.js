import { useContext } from 'react';
import { Context } from './../context/context';
import { getCookie, setCookie } from './../helpers';

export const useFavorites = (
  id,
  year_of_manufacture,
  fuel,
  power,
  mileage,
  price,
  defaultPhoto,
  title,
  brand,
  model
) => {
  const { dispatch } = useContext(Context);
  const ad = {
    id,
    title,
    brand,
    model,
    price,
    mileage,
    defaultPhoto,
    fuel,
    power,
    year_of_manufacture,
  };

  const addToFavorites = () => {
    const favoritesCookie = getCookie('fav');
    let favorites = [];
    if (favoritesCookie) {
      favorites = favoritesCookie;
    }

    favorites.push(ad);
    setCookie('fav', favorites, 86400);

    dispatch({
      type: 'ADD_TO_FAVORITES',
      ad: ad,
    });
  };

  const removeFavorites = (id) => {
    const favoritesCookie = getCookie('fav');
    const newFav = favoritesCookie.filter((item) => item.id !== id);
    setCookie('fav', newFav, 86400);
    dispatch({ type: 'REMOVE_ITEM_FROM_FAVORITES', id: id });
  };

  return {
    addToFavorites,
    removeFavorites,
  };
};
