import React from 'react';
import { ChevronUp } from '../Icons';
import { FavoritesItem } from './index';

export const FavoritesMobile = (props) => {
  const { favorites, dispatch, collapse } = props;
  return (
    <div className="favorite-box-mobile">
      <h3>{favorites.length} - Obľúbené</h3>
      {favorites.map((favorite) => (
        <FavoritesItem ad={favorite} key={favorite.id} />
      ))}

      <div className="favorite-mobile-buttons">
        <button
          onClick={() =>
            dispatch({ type: 'TOGGLE_FAVORITES', toggle: !collapse })
          }
        >
          <ChevronUp />
        </button>
      </div>
    </div>
  );
};
