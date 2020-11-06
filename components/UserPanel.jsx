import React from 'react';
import { useTheme, useApi } from './../hooks';
import Link from 'next/link';
import { getDateFromTimestamp } from './../helpers';

export const UserPanel = ({ user }) => {
  const { handleChangeTheme } = useTheme();
  const { logout } = useApi();

  return (
    <div className="user-panel">
      {user ? (
        <>
          <h4>Ahoj, {user.username} </h4>
          <p>
            <strong>Posledné prihlásenie:</strong>{' '}
            {user.time_signin ? getDateFromTimestamp(user.time_signin) : 'dnes'}
          </p>

          <p>
            <Link href="/post-ad">
              <a>
                <i aria-hidden className="fas fa-plus mr-2"></i> Pridať inzerát
              </a>
            </Link>
            <Link href="/my-ad">
              <a>
                <i aria-hidden className="fas fa-car mr-2"></i> Moje inzeráty
              </a>
            </Link>
            <Link href="/account">
              <a>
                <i aria-hidden className="fas fa-cog mr-2"></i> Nastavenia účtu
              </a>
            </Link>
            <a className="cursor-pointer" onClick={() => handleChangeTheme()}>
              <i aria-hidden className="fas fa-palette mr-2"></i> Zmeniť tému
            </a>
            <a onClick={logout} href="#" className="user-add-ads">
              <i aria-hidden className="fas fa-sign-out-alt mr-2"></i> Odhlásiť
            </a>
          </p>
        </>
      ) : (
        <h6>
          <a className="cursor-pointer" onClick={() => handleChangeTheme()}>
            <i aria-hidden className="fas fa-palette mr-2"></i> Zmeniť tému
          </a>
        </h6>
      )}
    </div>
  );
};
