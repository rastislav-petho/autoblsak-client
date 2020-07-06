import React, { useContext, Fragment, useEffect } from "react";
import { Context } from "./../context/context";
import { FavoritesItem } from "./index";

export const Favorites = () => {
  const { state, dispatch } = useContext(Context);
  const collapse = state.config.toggleFavorites;

  return (
    <Fragment>
      <div
        className="favorites-box"
        style={collapse ? { width: "300px" } : { width: "75px" }}
        onMouseEnter={() =>
          dispatch({ type: "TOGGLE_FAVORITES", toggle: true })
        }
        onMouseLeave={() =>
          dispatch({ type: "TOGGLE_FAVORITES", toggle: false })
        }
      >
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_FAVORITES", toggle: !collapse })
          }
        >
          {state.favoriteAds.length > 0 ? (
            <div>
              {state.favoriteAds.length}
              <i aria-hidden className="far fa-star"></i>
            </div>
          ) : (
            <i aria-hidden className="far fa-star"></i>
          )}
        </button>
        {collapse && <h3>{state.favoriteAds.length} - Obľúbené</h3>}
        {state.favoriteAds.map(favorite => (
          <FavoritesItem ad={favorite} key={favorite.id} collapse={collapse} />
        ))}
      </div>
      {collapse && (
        <div className="favorite-box-mobile">
          <h3>{state.favoriteAds.length} - Obľúbené</h3>
          {state.favoriteAds.map(favorite => (
            <FavoritesItem
              ad={favorite}
              key={favorite.id}
              collapse={collapse}
            />
          ))}

          <div className="favorite-mobile-buttons">
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_FAVORITES", toggle: !collapse })
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
