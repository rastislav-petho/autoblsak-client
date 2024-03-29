import React, { FC } from 'react';
import Link from 'next/link';
import { User } from 'helpers/types';
import { Bars, Car, Plus, Search, Star } from 'components/Icons';

type ToogleMenuProps = {
  user: User;
  favoritesCount: number;
  collapseFilter: boolean;
  collapseFavorites: boolean;
  handleCollapse: () => void;
  handleLogoClick: () => void;
  dispatch: React.Dispatch<any>;
};

export const ToogleMenu: FC<ToogleMenuProps> = (props) => {
  const {
    user,
    collapseFilter,
    collapseFavorites,
    favoritesCount,
    dispatch,
    handleCollapse,
    handleLogoClick,
  } = props;
  return (
    <div className="toggle-menu">
      <span>
        <a onClick={handleLogoClick} className="cursor-pointer">
          <img src="/img/bazarik-1.png" alt="Logo" className="logo" />
        </a>
      </span>
      <a
        className="cursor-pointer"
        onClick={() =>
          dispatch({ type: 'TOGGLE_FILTER', toggle: !collapseFilter })
        }
      >
        <Search />
      </a>
      <a
        className="cursor-pointer"
        onClick={() =>
          dispatch({ type: 'TOGGLE_FAVORITES', toggle: !collapseFavorites })
        }
      >
        <Star />
        <span className="count">{favoritesCount}</span>
      </a>
      <span>
        <Link href="/pridat-inzerat">
          <a className="user-add-ads">
            <Plus />
          </a>
        </Link>
      </span>
      {user && (
        <>
          <span>
            <Link href="/moje-inzeraty">
              <a className="user-add-ads">
                <Car />
              </a>
            </Link>
          </span>
        </>
      )}
      <a onClick={handleCollapse} className="cursor-pointer">
        <Bars />
      </a>
    </div>
  );
};
