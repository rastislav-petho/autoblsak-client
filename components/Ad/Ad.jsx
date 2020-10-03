import React, { useContext, memo } from 'react';
import { Context } from '../../context/context';
import { useFavorites } from './../../hooks';
import Link from 'next/link';
import {
  decodeFuel,
  decodeColor,
  decodeTransmision,
  decodeCoupe,
  getDateFromTimestamp,
} from '../../helpers';

export const Ad = memo((props) => {
  const {
    id,
    year_of_manufacture,
    fuel,
    power,
    mileage,
    price,
    defaultPhoto,
    transmision,
    cubage,
    color,
    number_of_doors,
    premium,
    coupe,
    status,
    paid,
    created,
    title,
    brand,
    model,
    location,
  } = props.ad;
  const { actionBar, handleRemove, handleActive, handleEdit } = props;
  const { state, dispatch } = useContext(Context);
  const { addToFavorites, removeFavorites } = useFavorites(
    id,
    year_of_manufacture,
    fuel,
    power,
    mileage,
    price,
    defaultPhoto,
    title,
    brand,
    model
  );

  return (
    <div key={id} className="row ad-box shadow">
      <div className="col-12 col-lg-4 p-0">
        {premium ? <div className="top">TOP</div> : ''}
        <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
          <a>
            <img
              className="w-100"
              src={`${state.url}/${defaultPhoto.photo}`}
              alt="bme f10"
            />
          </a>
        </Link>
      </div>
      <div className="col-12 col-lg-8 p-0 pl-lg-2">
        <div className="row ad-titles">
          <div className="col-8">
            <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
              <a>
                {props.ad.title
                  ? props.ad.title
                  : props.ad.brand && props.ad.brand}{' '}
                {props.ad.model && props.ad.model}
              </a>
            </Link>
          </div>
          <div className="col-4 text-right">{price} €</div>
        </div>
        <div className="row ad-contents mt-2">
          <div className="col-12">
            <div className="row">
              <div className="col-4 col-md-2 text-center">
                <span>
                  <i aria-hidden className="fas fa-calendar-alt"></i>
                </span>
                <br />
                {year_of_manufacture}
              </div>
              <div className="col-4 col-md-2 text-center">
                <span>
                  <i aria-hidden className="fas fa-gas-pump"></i> <br />
                </span>{' '}
                {decodeFuel(fuel)}
              </div>
              <div className="col-4 col-md-2 text-center">
                <span>
                  <i aria-hidden className="fas fa-dumbbell"></i>
                </span>
                <br />
                {decodeTransmision(transmision)}
              </div>
              <div className="col-4 col-md-2 text-center">
                <span>
                  <i aria-hidden className="fas fa-tachometer-alt"></i>
                </span>
                <br /> {power} kW
              </div>
              <div className="col-4 col-md-2 text-center">
                <span>
                  <i aria-hidden className="fas fa-road"></i>
                </span>
                <br /> {mileage} km
              </div>
              <div className="col-4 col-md-2 text-center">
                <span>
                  <i aria-hidden className="fas fa-palette"></i>
                </span>{' '}
                <br /> {decodeColor(color)}
              </div>
            </div>
          </div>
        </div>
        <div className="row ad-footers mt-3">
          <div className="col-10 action-bar">
            {actionBar ? (
              <>
                <button onClick={() => handleEdit(id, 'edit')} className="mr-2">
                  Upraviť
                </button>
                <button
                  onClick={() => handleEdit(id, 'edit-photos')}
                  className="mr-2"
                >
                  Upraviť fotografie
                </button>
                {status == 1 ? (
                  <button
                    onClick={() => handleActive(id, 'deactive')}
                    className="mr-2"
                  >
                    Deaktivovať
                  </button>
                ) : (
                  <button
                    onClick={() => handleActive(id, 'active')}
                    className="mr-2"
                  >
                    Aktivovať
                  </button>
                )}
                <button onClick={() => handleRemove(id)} className="mr-2">
                  Odstrániť
                </button>

                {paid != 1 && (
                  <p className="mt-3">
                    Pre zverejnenie inzerázu pošlite SMS v tvare{' '}
                    <strong> AUTOB {id}</strong> na číslo 8866 Cena SMS je:
                    2,90€
                  </p>
                )}
                {premium != 1 && (
                  <p className="mt-3">
                    {' '}
                    Pre topovanie inzerátu pošlite SMS na číslo 8866 v tvare
                    <strong> AUTOB TOP {id} </strong> Cena za službu na týždeň
                    (7 dní) je 2,00 €
                  </p>
                )}
              </>
            ) : (
              <>
                <span className="badge badge-pill badge-secondary mr-2">
                  {getDateFromTimestamp(created)}
                </span>
                <span className="badge badge-pill badge-info">{location}</span>
              </>
            )}
          </div>
          <div className="col-2 text-right">
            {state.favoriteAds.find((ad) => ad.id === id) ? (
              <i
                onClick={() => removeFavorites(id)}
                aria-hidden
                className="fas fa-star add-to-favorites-button"
                data-toggle="tooltip"
                data-placement="top"
                title="Odobrať z obľúbených"
              ></i>
            ) : (
              <i
                onClick={() => addToFavorites()}
                aria-hidden
                className="far fa-star add-to-favorites-button"
                data-toggle="tooltip"
                data-placement="top"
                title="Pridať do obľúbených"
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
