import React, { Fragment } from 'react';
import Link from 'next/link';

export const Menu = (props) => {
  const { user, handleFavorites, favoritesCount } = props;
  return (
    <div className="menu-wrapper">
      <div className="menu">
        <span>
          <Link href="/">
            <a>
              <img
                src="/img/bazarik-1.png"
                alt="Autoblšák.sk"
                className="logo"
              />
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
        {!user && (
          <Fragment>
            <span>
              <Link href="/login">
                <a>Prihlásiť</a>
              </Link>
            </span>
          </Fragment>
        )}
      </div>
      <Link href="/post-ad">
        <button className="header-button mr-2">Pridať inzerát</button>
      </Link>
      {!user && (
        <Link href="/register">
          <button className="header-button mr-2">Vytvoriť účet</button>
        </Link>
      )}
      <div className="favorites">
        <i aria-hidden className="far fa-star" onClick={handleFavorites}>
          <span className="count">{favoritesCount}</span>
        </i>
      </div>
    </div>
  );
};
