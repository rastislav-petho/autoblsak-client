import React, { useContext, Fragment, memo, FC } from 'react';
import { Context } from '../../context/context';
import { useFavorites } from '../../hooks';
import { decodeFuel } from '../../helpers';
import Link from 'next/link';
import { Favorite } from 'helpers/types';

type FavoritesItemProps = {
  ad: Favorite;
};

export const FavoritesItem: FC<FavoritesItemProps> = memo((props) => {
  const {
    id,
    year_of_manufacture,
    fuel,
    power,
    mileage,
    price,
    defaultPhoto,
  } = props.ad;
  const { state } = useContext(Context);
  const { removeFavorites } = useFavorites(props.ad);

  return (
    <div key={id} className="mb-2 mr-2 favorite">
      <div className="favorites-img-box">
        <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
          <a>
            <img
              src={`${state.url}/${defaultPhoto?.photo}`}
              alt={
                props.ad.title
                  ? props.ad.title
                  : props.ad.brand && props.ad.brand
              }
            />
          </a>
        </Link>
      </div>

      <Fragment>
        <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
          <div className="favorites-content-box cursor-pointer">
            {props.ad.title ? props.ad.title : props.ad.brand && props.ad.brand}{' '}
            {props.ad.model && props.ad.model} - {year_of_manufacture} <br />
            {power} kW, {decodeFuel(fuel)} <br />
            {mileage} km, {price} €<br />
          </div>
        </Link>
        <div className="favorites-remove-box">
          <i
            onClick={() => removeFavorites(id)}
            aria-hidden
            className="far fa-trash-alt"
            data-toggle="tooltip"
            data-placement="top"
            title="Odobrať z obľúbených"
          ></i>
        </div>
      </Fragment>
    </div>
  );
});
