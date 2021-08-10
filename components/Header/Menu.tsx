import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import { User } from 'helpers/types';
import { Star } from 'components/Icons';

type MenuProps = {
  user: User;
  favoritesCount: number;
  handleFavorites: () => void;
  handleLogoClick: () => void;
};

export const Menu: FC<MenuProps> = (props) => {
  const { user, handleFavorites, favoritesCount, handleLogoClick } = props;
  return (
    <div className="menu-wrapper">
      <div className="menu">
        <span>
          <a onClick={handleLogoClick} className="cursor-pointer">
            <img src="/img/bazarik-1.png" alt="Autoblšák.sk" className="logo" />
          </a>
        </span>
        <span>
          <a href="https://autoblsak.sk/magazin">Magazín</a>
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
      <Link href="/pridat-inzerat">
        <button className="header-button mr-2">Pridať inzerát</button>
      </Link>
      {!user && (
        <Link href="/register">
          <button className="header-button mr-2">Vytvoriť účet</button>
        </Link>
      )}
      <div className="favorites">
        <i onClick={handleFavorites}>
          <Star size={24} />
          <span className="count">{favoritesCount}</span>
        </i>
      </div>
    </div>
  );
};
