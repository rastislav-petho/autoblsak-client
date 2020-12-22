import React from 'react';
import { getAdTitle, getDateFromTimestamp } from './../../../helpers';
import NumberFormat from 'react-number-format';
import { BackButton } from '../../BackButton';

export const AdPageHeader = (props) => {
  const { title, brand, model, id, created, views, premium, price } = props;

  return (
    <div className="row inzerat-titles">
      <div className="col-12">
        <h5>
          <BackButton>
            <button className="btn btn-dark btn-sm">Späť</button>
          </BackButton>
        </h5>
      </div>
      <div className="col-12 col-lg-6">
        <h1>{getAdTitle(title, brand, model)}</h1>
        <span>ID inzerátu: {id}</span> -{' '}
        <span>Zverejnené: {getDateFromTimestamp(created)}</span> -{' '}
        <span className="badge badge-secondary">
          <i aria-hidden className="far fa-eye"></i> {views}
        </span>{' '}
        {premium ? (
          <span>
            {' '}
            - <span className="badge badge-danger">TOP</span>
          </span>
        ) : (
          ''
        )}
      </div>
      <div className="col-12 col-lg-6 text-lg-right">
        <NumberFormat
          value={price}
          displayType="text"
          thousandSeparator=" "
          suffix=" €"
          renderText={(value) => <h1>{value}</h1>}
        />
      </div>
    </div>
  );
};
