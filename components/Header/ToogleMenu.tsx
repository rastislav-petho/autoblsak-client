import React, { FC } from 'react';
import Link from 'next/link';
import { User } from 'helpers/types';

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
      <i
        aria-hidden
        className="fas fa-search"
        onClick={() =>
          dispatch({ type: 'TOGGLE_FILTER', toggle: !collapseFilter })
        }
      ></i>
      <i
        aria-hidden
        className="far fa-star"
        onClick={() =>
          dispatch({ type: 'TOGGLE_FAVORITES', toggle: !collapseFavorites })
        }
      >
        <span className="count">{favoritesCount}</span>
      </i>
      <span>
        <Link href="/pridat-inzerat">
          <a className="user-add-ads">
            <i aria-hidden className="fas fa-plus"></i>{' '}
          </a>
        </Link>
      </span>
      {user && (
        <>
          <span>
            <Link href="/moje-inzeraty">
              <a className="user-add-ads">
                <i aria-hidden className="fas fa-car"></i>{' '}
              </a>
            </Link>
          </span>
        </>
      )}
      <i aria-hidden className="fas fa-bars" onClick={handleCollapse}></i>
    </div>
  );
};
