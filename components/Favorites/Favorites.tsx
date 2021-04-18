import { Favorite } from 'helpers/types';
import React, { FC, Fragment, memo } from 'react';
import { FavoritesDesktop, FavoritesMobile } from './index';

type FavoritesProps = {
  favorites: Favorite[];
  collapse: boolean;
  dispatch: React.Dispatch<any>;
};

export const Favorites: FC<FavoritesProps> = memo((props) => {
  const { favorites, collapse, dispatch } = props;

  return (
    <Fragment>
      {collapse && <FavoritesDesktop favorites={favorites} />}

      {collapse && (
        <FavoritesMobile
          favorites={favorites}
          dispatch={dispatch}
          collapse={collapse}
        />
      )}
    </Fragment>
  );
});
