import React from 'react';
import Link from 'next/link';

export const ToogleMenu = (props) => {
  const {
    user,
    collapseFilter,
    collapseFavorites,
    favoritesCount,
    dispatch,
    handleCollapse,
  } = props;
  return (
    <div className="toggle-menu">
      <span>
        <a href="/">
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
      {user && (
        <>
          <span>
            <Link href="/my-ad">
              <a className="user-add-ads">
                <i aria-hidden className="fas fa-car"></i>{' '}
              </a>
            </Link>
          </span>
          <span>
            <Link href="/post-ad">
              <a className="user-add-ads">
                <i aria-hidden className="far fa-plus-square"></i>{' '}
              </a>
            </Link>
          </span>
        </>
      )}
      <i aria-hidden className="fas fa-bars" onClick={handleCollapse}></i>
    </div>
  );
};
