import { Favorite } from 'helpers/types';
import React, { FC } from 'react';
import Fade from 'react-reveal/Fade';
import { FavoritesItem } from './index';

type FavoritesDesktopProps = {
  favorites: Favorite[];
};

export const FavoritesDesktop: FC<FavoritesDesktopProps> = (props) => {
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
