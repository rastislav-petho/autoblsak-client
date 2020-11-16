import React from 'react';
import Link from 'next/link';
import {
  getAdTitle,
  getDateFromTimestamp,
  formateNumbers,
} from './../../../helpers';

export const AdPageHeader = (props) => {
  const { title, brand, model, id, created, views, premium, price } = props;

  return (
    <div className="row inzerat-titles">
      <div className="col-12">
        <h5>
          <Link href={`/`} as={`/`}>
            <button className="back-button">
              <i aria-hidden className="fas fa-chevron-left"></i>
            </button>
          </Link>
        </h5>
      </div>
      <div className="col-12 col-lg-6">
        <h1>{getAdTitle(title, brand, model)}</h1>
        <span>ID inzerátu: {id}</span> -{' '}
        <span>Zverejnené: {getDateFromTimestamp(created)}</span> -{' '}
        <span className="badge badge-success">
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
        <h1>{formateNumbers(price)} €</h1>
      </div>
    </div>
  );
};
