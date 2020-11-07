import React from 'react';
import Fade from 'react-reveal/Fade';
import { FavoritesItem } from './index';

export const FavoritesDesktop = (props) => {
  const { favorites } = props;
  return (
    <Fade top>
      <div className="container">
        <div className="favorites-box">
          {favorites.map((favorite) => (
            <FavoritesItem ad={favorite} key={favorite.id} />
          ))}
        </div>
      </div>
    </Fade>
  );
};
