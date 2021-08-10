import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import { User } from 'helpers/types';

type MobileMenuProps = {
  user: User;
  handleChangeTheme: () => void;
  logout: () => void;
};

export const MobileMenu: FC<MobileMenuProps> = (props) => {
  const { user, handleChangeTheme, logout } = props;
  return (
    <div className="mobile-menu">
      <a href="#" onClick={handleChangeTheme}>
        Zmeniť tému
      </a>
      <a href="https://autoblsak.sk/magazin">Magazín</a>
      <Link href="/pridat-inzerat">
        <a className="user-add-ads">Pridať inzerát</a>
      </Link>
      {user && (
        <Fragment>
          <Link href="/moje-inzeraty">
            <a className="user-add-ads">Moje inzeráty</a>
          </Link>
          <Link href="/account">
            <a className="user-add-ads">Nastavenia účtu</a>
          </Link>
        </Fragment>
      )}
      {user ? (
        <a onClick={logout} href="#" className="user-add-ads">
          Odhlásiť
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
