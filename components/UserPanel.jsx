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
            {getDateFromTimestamp(user.time_signin)}
          </p>

          <p>
            <h6>
              <Link href="/post-ad">
                <a>
                  <i aria-hidden className="fas fa-plus mr-2"></i> Pridať
                  inzerát
                </a>
              </Link>
            </h6>
            <h6>
              <Link href="/my-ad">
                <a>
                  <i aria-hidden className="fas fa-car mr-2"></i> Moje inzeráty
                </a>
              </Link>
            </h6>
            <h6>
              <a className="cursor-pointer" onClick={() => handleChangeTheme()}>
                <i aria-hidden className="fas fa-palette mr-2"></i> Zmeniť tému
              </a>
            </h6>
            <h6>
              <a onClick={logout} href="#" className="user-add-ads">
                <i aria-hidden className="fas fa-sign-out-alt mr-2"></i>{' '}
                Odhlásiť
              </a>
            </h6>
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
