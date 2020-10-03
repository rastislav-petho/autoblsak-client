import React, { useContext, Fragment, useEffect } from 'react';
import { Context } from './../context/context';
import { FavoritesItem } from './index';

export const Favorites = () => {
  const { state, dispatch } = useContext(Context);
  const collapse = state.config.toggleFavorites;

  return (
    <Fragment>
      <div className="favorites-box">
        <h5>
          <i aria-hidden className="far fa-star add-to-favorites-button"></i>{' '}
          Obľúbené
        </h5>
        {state.favoriteAds.map((favorite) => (
          <FavoritesItem ad={favorite} key={favorite.id} collapse={collapse} />
        ))}
      </div>

      {collapse && (
        <div className="favorite-box-mobile">
          <h3>{state.favoriteAds.length} - Obľúbené</h3>
          {state.favoriteAds.map((favorite) => (
            <FavoritesItem
              ad={favorite}
              key={favorite.id}
              collapse={collapse}
            />
          ))}

          <div className="favorite-mobile-buttons">
            <button
              onClick={() =>
                dispatch({ type: 'TOGGLE_FAVORITES', toggle: !collapse })
              }
            >
              <i aria-hidden className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
