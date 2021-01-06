import React, { useContext, memo, useState } from 'react';
import { Context } from '../../context/context';
import { useFavorites } from './../../hooks';
import { AdGallery } from './index';
import Link from 'next/link';
import axios from 'axios';
import ReactLoading from 'react-loading';
import NumberFormat from 'react-number-format';
import {
  decodeFuel,
  decodeColor,
  decodeTransmision,
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
    color,
    premium,
    status,
    paid,
    created,
    title,
    brand,
    model,
    location,
    category,
    additional_information,
  } = props.ad;
  const { actionBar, handleRemove, handleActive, handleEdit } = props;
  const [loadGallery, setLoadGallery] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
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

  // TODO spravit ako konstantu
  const withOutIcons = [9, 10, 11, 12, 13, 14];

  const handleLoadGallery = () => {
    setLoading(true);
    axios
      .get(`${state.api}/upload-photos/${id}`)
      .then(function (response) {
        if (response.status === 200) {
          const mapPhotos = response.data.map((item) => ({
            ...item,
            src: `http://autoblsak.sk/${item.photo}`,
            width: 4,
            height: 3,
          }));
          setPhotos(mapPhotos);
          setLoadGallery(true);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div key={id} className="row ad-box shadow">
      {loadGallery && (
        <div>
          <AdGallery
            photos={photos}
            open={loadGallery}
            setLoadGallery={setLoadGallery}
          />
        </div>
      )}

      <div
        className="col-12 col-lg-4 p-0 ad-photo"
        style={{
          backgroundImage: `url(${state.url}/${defaultPhoto.photo})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {premium ? <div className="top">TOP</div> : ''}

        {loading ? (
          <div className="load-gallery-loading">
            <ReactLoading
              type={'spinningBubbles'}
              color={state.theme === 'dark' ? '#d65a31' : '#ff331f'}
              height={'25px'}
              width={'25px'}
            />
          </div>
        ) : (
          <div className="load-gallery" onClick={() => handleLoadGallery()}>
            <i aria-hidden className="fas fa-images"></i>
          </div>
        )}
        <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
          <a></a>
        </Link>
      </div>

      <div className="col-12 col-lg-8">
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
          <div className="col-4 text-right">
            <NumberFormat
              value={price}
              displayType="text"
              thousandSeparator=" "
              suffix=" €"
            />
          </div>
        </div>
        <div className="row ad-contents mt-2">
          {year_of_manufacture && (
            <div className="col-4 col-md-2 text-center white-space p-1">
              <i aria-hidden className="fas fa-calendar-alt"></i>
              <br />
              {year_of_manufacture}
            </div>
          )}
          {fuel && (
            <div className="col-4 col-md-2 text-center white-space p-1">
              <i aria-hidden className="fas fa-gas-pump"></i> <br />
              {decodeFuel(fuel)}
            </div>
          )}
          {transmision && (
            <div className="col-4 col-md-2 text-center white-space p-1">
              <i aria-hidden className="fas fa-dumbbell"></i>
              <br />
              {decodeTransmision(transmision)}
            </div>
          )}
          {power && (
            <div className="col-4 col-md-2 text-center white-space p-1">
              <i aria-hidden className="fas fa-tachometer-alt"></i>
              <br /> {power} kW
            </div>
          )}
          {mileage && (
            <div className="col-4 col-md-2 text-center white-space p-1">
              <i aria-hidden className="fas fa-road"></i>
              <br />{' '}
              <NumberFormat
                value={mileage}
                displayType="text"
                thousandSeparator=" "
                suffix=" km"
              />
            </div>
          )}
          {color && (
            <div className="col-4 col-md-2 text-center white-space p-1">
              <span>
                <i aria-hidden className="fas fa-palette"></i>
              </span>{' '}
              <br /> {decodeColor(color)}
            </div>
          )}
          <div className="col-12">
            {withOutIcons.includes(category) &&
              additional_information.slice(0, 150)}
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
                    <strong> AUTOB {id}</strong> na číslo 8866 Cena SMS je 2,90€
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
                <span className="badge badge-pill badge-secondary">
                  {location}
                </span>
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
