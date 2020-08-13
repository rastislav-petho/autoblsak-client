import React, { useContext, memo } from 'react';
import { Context } from '../../context/context';
import Link from 'next/link';
import {
  decodeFuel,
  decodeColor,
  decodeTransmision,
  decodeCoupe,
  setCookie
} from '../../helpers';

export const Ad = memo(props => {
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
    paid
  } = props.ad;
  const { actionBar, handleRemove, handleActive, handleEdit } = props;
  const { state, dispatch } = useContext(Context);

  const addToFavorites = () => {
    dispatch({ type: 'ADD_TO_FAVORITES', ad: props.ad });
    //setCookie("favorites", state.ads, 100000000);
  };

  return (
    <div key={id} className="row ad-box">
      <div className="col-12 col-lg-4">
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
      <div className="col-12 col-lg-8">
        <div className="row ad-titles">
          <div className="col-8">
            <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
              <a>
                {props.ad.title
                  ? props.ad.title
                  : props.ad.brand && props.ad.brand.value}{' '}
                {props.ad.model && props.ad.model.value}
              </a>
            </Link>
          </div>
          <div className="col-4 text-right">{price} €</div>
        </div>
        <div className="row ad-contents">
          <div className="col-12">
            <div className="row">
              <div className="col-6 col-md-4">
                <span>Rok výroby:</span> {year_of_manufacture}
              </div>
              <div className="col-6 col-md-4">
                <span>Palivo:</span> {decodeFuel(fuel)}
              </div>
              <div className="col-6 col-md-4">
                <span>Prevodovka:</span> {decodeTransmision(transmision)}
              </div>
              <div className="col-6 col-md-4">
                <span>Výkon:</span> {power} kW
              </div>
              <div className="col-6 col-md-4">
                <span>Počet km:</span> {mileage} km
              </div>
              <div className="col-6 col-md-4">
                <span>Farba:</span> {decodeColor(color)}
              </div>
              <div className="col-6 col-md-4">
                <span>Kubatúra:</span> {cubage}
              </div>
              <div className="col-6 col-md-4">
                <span>Počet dverí:</span> {number_of_doors}
              </div>
              <div className="col-6 col-md-4">
                <span>karoséria:</span> {decodeCoupe(coupe)}
              </div>
            </div>
          </div>
        </div>
        <div className="row ad-footers mt-3">
          <div className="col-11 action-bar">
            {actionBar && (
              <>
                <button onClick={() => handleEdit(id)} className="mr-2">
                  Upraviť
                </button>
                <button className="mr-2">Upraviť fotografie</button>
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
            )}
          </div>
          <div className="col-1 text-right">
            {state.favoriteAds.find(ad => ad.id === id) ? (
              <i
                aria-hidden
                className="fas fa-star add-to-favorites-button"
              ></i>
            ) : (
              <i
                onClick={() => addToFavorites()}
                aria-hidden
                className="far fa-star add-to-favorites-button"
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
