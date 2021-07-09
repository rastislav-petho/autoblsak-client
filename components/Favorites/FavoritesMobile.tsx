import { ChevronUp } from 'components/Icons';
import { Favorite } from 'helpers/types';
import React, { FC } from 'react';
import { FavoritesItem } from './index';

type FavoritesMobile = {
  favorites: Favorite[];
  collapse: boolean;
  dispatch: React.Dispatch<any>;
};

export const FavoritesMobile: FC<FavoritesMobile> = (props) => {
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
