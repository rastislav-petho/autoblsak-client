import React, { FC } from 'react';
import { useTheme, useApi } from '../hooks';
import Link from 'next/link';
import { getDateFromTimestamp } from '../helpers';
import { User } from 'helpers/types';
import { Plus, Car, Cog, Palette, SignOut } from './Icons';

type UserPanelProps = {
  user: User;
};

export const UserPanel: FC<UserPanelProps> = (props) => {
  const { user } = props;
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
            <Link href="/pridat-inzerat">
              <a>
                <Plus size={16} /> Pridať inzerát
              </a>
            </Link>
            <Link href="/moje-inzeraty">
              <a>
                <Car size={16} /> Moje inzeráty
              </a>
            </Link>
            <Link href="/account">
              <a>
                <Cog size={16} /> Nastavenia účtu
              </a>
            </Link>
            <a className="cursor-pointer" onClick={() => handleChangeTheme()}>
              <Palette size={16} /> Zmeniť tému
            </a>
            <a onClick={logout} href="#" className="user-add-ads">
              <SignOut size={16} /> Odhlásiť
            </a>
          </p>
        </>
      ) : (
        <h6>
          <a className="cursor-pointer" onClick={() => handleChangeTheme()}>
            <Palette size={16} /> Zmeniť tému
          </a>
        </h6>
      )}
    </div>
  );
};
