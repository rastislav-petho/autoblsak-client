import React, { useContext } from "react";
import { Context } from "./../context/context";
import { FavoritesItem } from "./index";

export const Favorites = () => {
  const { state, dispatch } = useContext(Context);
  const collapse = state.config.toggleFavorites;

  return (
    <div
      className="favorites-box"
      style={collapse ? { width: "300px" } : { width: "75px" }}
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
  );
};
