import { useContext } from 'react';
import { Context } from './../context/context';
import Cookies from 'js-cookie';

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
    const favoritesCookie = Cookies.getJSON('fav');
    let favorites = [];
    if (favoritesCookie) {
      favorites = favoritesCookie;
    }

    favorites.push(ad);
    Cookies.set('fav', favorites, { expires: 365 });

    dispatch({
      type: 'ADD_TO_FAVORITES',
      ad: ad,
    });
  };

  const removeFavorites = (id) => {
    const favoritesCookie = Cookies.getJSON('fav');
    const newFav = favoritesCookie.filter((item) => item.id !== id);
    Cookies.set('fav', newFav, { expires: 365 });
    dispatch({ type: 'REMOVE_ITEM_FROM_FAVORITES', id: id });
  };

  return {
    addToFavorites,
    removeFavorites,
  };
};
