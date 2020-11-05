import React, { Fragment, useState, useContext } from 'react';
import { Context } from './../context/context';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useTheme } from './../hooks';
import { scrollToTop } from '../helpers';

export const Header = () => {
  const [collapse, setCollapse] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { handleChangeTheme } = useTheme();
  const collapseFilter = state.config.toggleFilter;
  const collapseFavorites = state.config.toggleFavorites;
  const router = useRouter();

  const logout = () => {
    Cookies.remove('user');
    dispatch({ type: 'LOGOUT' });
    router.push('/login');
  };

  const handleFavorites = () => {
    dispatch({ type: 'TOGGLE_FAVORITES', toggle: !collapseFavorites });
    scrollToTop();
  };

  return (
    <div className="container p-1">
      <div className="menu-wrapper">
        <div className="menu">
          <span>
            <Link href="/">
              <a>
                <img src="/img/bazarik-1.png" alt="Logo" className="logo" />
              </a>
            </Link>
          </span>
          <span>
            <a href="https://autoblsak.sk/magazin">Magazín</a>
          </span>

          <span>
            <Link href="/onas">
              <a>O nás</a>
            </Link>
          </span>
          <span>
            <Link href="/kontakt">
              <a>Kontakt</a>
            </Link>
          </span>
          {!state.user && (
            <Fragment>
              <span>
                <Link href="/register">
                  <a>Registrácia</a>
                </Link>
              </span>
              <span>
                <Link href="/login">
                  <a>Prihlásiť</a>
                </Link>
              </span>
            </Fragment>
          )}
        </div>
        <div className="favorites">
          <i aria-hidden className="far fa-star" onClick={handleFavorites}>
            <span className="count">{state.favoriteAds.length}</span>
          </i>
        </div>
      </div>

      <div className="toggle-menu">
        <span>
          <Link href="/">
            <a>
              <img src="/img/bazarik-1.png" alt="Logo" className="logo" />
            </a>
          </Link>
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
          <span className="count">{state.favoriteAds.length}</span>
        </i>
        {state.user && (
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
        <i
          aria-hidden
          className="fas fa-bars"
          onClick={() => setCollapse(!collapse)}
        ></i>
      </div>

      {collapse && (
        <div className="mobile-menu">
          <span>
            <a onClick={() => handleChangeTheme()}>Zmeniť tému</a>
          </span>
          <span>
            <a href="https://autoblsak.sk/magazin">Magazín</a>
          </span>
          <span>
            <Link href="/kontakt">
              <a>Kontakt</a>
            </Link>
          </span>
          <span>
            <Link href="/onas">
              <a>O nás</a>
            </Link>
          </span>
          {state.user && (
            <Fragment>
              <span>
                <Link href="/post-ad">
                  <a className="user-add-ads">
                    <i aria-hidden className="far fa-plus-square"></i> Pridať
                    inzerát
                  </a>
                </Link>
              </span>
              <span>
                <Link href="/my-ad">
                  <a className="user-add-ads">
                    <i aria-hidden className="fas fa-car"></i> Moje inzeráty
                  </a>
                </Link>
              </span>
            </Fragment>
          )}
          {state.user ? (
            <a onClick={logout} href="#" className="user-add-ads">
              <i aria-hidden className="fas fa-sign-out-alt"></i> Odhlásiť
            </a>
          ) : (
            <Fragment>
              <span>
                <Link href="/register">
                  <a className="user-add-ads">Registrácia</a>
                </Link>
              </span>
              <span>
                <Link href="/login">
                  <a className="user-add-ads">Prihlásiť</a>
                </Link>
              </span>
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};
