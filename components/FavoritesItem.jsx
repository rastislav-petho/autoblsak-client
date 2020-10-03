import React, { useContext, Fragment, memo } from 'react';
import { Context } from './../context/context';
import { useFavorites } from './../hooks';
import { decodeFuel } from '../helpers';
import Link from 'next/link';

export const FavoritesItem = memo((props) => {
  const {
    id,
    year_of_manufacture,
    fuel,
    power,
    mileage,
    price,
    defaultPhoto,
  } = props.ad;
  const { state, dispatch } = useContext(Context);
  const { removeFavorites } = useFavorites(props.ad);

  return (
    <div key={id} className="row mb-2 favorite">
      <div className="col-3 favorites-img-box">
        <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
          <a>
            <img src={`${state.url}/${defaultPhoto.photo}`} alt="bme f10" />
          </a>
        </Link>
      </div>

      <Fragment>
        <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
          <div className="col-7 favorites-content-box cursor-pointer">
            {props.ad.title ? props.ad.title : props.ad.brand && props.ad.brand}{' '}
            {props.ad.model && props.ad.model} - {year_of_manufacture} <br />
            {power} kW, {decodeFuel(fuel)} <br />
            {mileage} km, {price} €<br />
          </div>
        </Link>
        <div className="col-2 favorites-remove-box">
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
