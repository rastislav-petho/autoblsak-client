import React, { Fragment } from 'react';
import Link from 'next/link';

export const MobileMenu = (props) => {
  const { user, handleChangeTheme, logout } = props;
  return (
    <div className="mobile-menu">
      <a href="#" onClick={handleChangeTheme}>
        Zmeniť tému
      </a>
      <a href="https://autoblsak.sk/magazin">Magazín</a>
      <Link href="/kontakt">
        <a>Kontakt</a>
      </Link>
      <Link href="/onas">
        <a>O nás</a>
      </Link>
      {user && (
        <Fragment>
          <Link href="/post-ad">
            <a className="user-add-ads">
              <i aria-hidden className="far fa-plus-square"></i> Pridať inzerát
            </a>
          </Link>
          <Link href="/my-ad">
            <a className="user-add-ads">
              <i aria-hidden className="fas fa-car"></i> Moje inzeráty
            </a>
          </Link>
          <Link href="/account">
            <a className="user-add-ads">
              <i aria-hidden className="fas fa-cog"></i> Nastavenia účtu
            </a>
          </Link>
        </Fragment>
      )}
      {user ? (
        <a onClick={logout} href="#" className="user-add-ads">
          <i aria-hidden className="fas fa-sign-out-alt"></i> Odhlásiť
        </a>
      ) : (
        <Fragment>
          <Link href="/register">
            <a className="user-add-ads">Registrácia</a>
          </Link>
          <Link href="/login">
            <a className="user-add-ads">Prihlásiť</a>
          </Link>
        </Fragment>
      )}
    </div>
  );
};
