import React, { Fragment, memo } from 'react';
import { FavoritesItem } from './index';
import Fade from 'react-reveal/Fade';

export const Favorites = memo((props) => {
  const { favorites, collapse, dispatch } = props;

  return (
    <Fragment>
      {collapse && (
        <Fade top>
          <div className="container">
            <div className="favorites-box">
              {favorites.map((favorite) => (
                <FavoritesItem
                  ad={favorite}
                  key={favorite.id}
                  collapse={collapse}
                />
              ))}
            </div>
          </div>
        </Fade>
      )}

      {collapse && (
        <div className="favorite-box-mobile">
          <h3>{favorites.length} - Obľúbené</h3>
          {favorites.map((favorite) => (
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
});
