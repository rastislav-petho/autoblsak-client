import React, { Fragment, memo } from 'react';
import { FavoritesDesktop, FavoritesMobile } from './index';

export const Favorites = memo((props) => {
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
