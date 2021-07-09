import React, { useState, useContext, useCallback } from 'react';
import { Context } from '../../context/context';
import { useRouter } from 'next/router';
import { useTheme, useApi } from '../../hooks';
import { scrollToTop } from '../../helpers';
import { Menu, MobileMenu } from './index';
import { ToogleMenu } from './ToogleMenu';
import { RESET_FILTER } from './../../helpers/constants';

export const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { handleChangeTheme } = useTheme();
  const { logout } = useApi();
  const collapseFilter = state.config.toggleFilter;
  const collapseFavorites = state.config.toggleFavorites;
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  const handleMobileChangeTheme = () => {
    handleChangeTheme();
    setCollapse(false);
  };

  const handleFavorites = () => {
    dispatch({ type: 'TOGGLE_FAVORITES', toggle: !collapseFavorites });
    scrollToTop();
  };

  const handleCollapse = useCallback(() => {
    setCollapse(!collapse);
  }, [setCollapse, collapse]);

  const handleLogoClick = () => {
    dispatch({ type: 'RESET_FILTER', filter: RESET_FILTER });
    router.push({
      pathname: '/',
    });
  };

  return (
    <div className="container p-1">
      <Menu
        user={state.user}
        handleFavorites={handleFavorites}
        favoritesCount={state.favoriteAds.length}
        handleLogoClick={handleLogoClick}
      />
      <ToogleMenu
        user={state.user}
        collapseFilter={collapseFilter}
        collapseFavorites={collapseFavorites}
        favoritesCount={state.favoriteAds.length}
        dispatch={dispatch}
        handleCollapse={handleCollapse}
        handleLogoClick={handleLogoClick}
      />

      {collapse && (
        <MobileMenu
          user={state.user}
          handleChangeTheme={handleMobileChangeTheme}
          logout={handleLogout}
        />
      )}
    </div>
  );
};