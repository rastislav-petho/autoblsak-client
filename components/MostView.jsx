import React from 'react';
import Link from 'next/link';
import NumberFormat from 'react-number-format';
import { Eye } from './Icons';

export const MostView = (props) => {
  const { data, url } = props;

  return (
    <div className="most-view">
      <h5>Najpozeranejšie inzeráty</h5>
      <div className="row">
        {data.data.map((item) => (
          <div key={item.id} className="col-12 mb-2">
            <Link href={`/inzerat/[id]`} as={`/inzerat/${item.id}`}>
              <a>
                <img
                  alt={item.brand + ' ' + item.model}
                  className="w-100"
                  src={`${url}/${item.defaultPhoto.photo}`}
                ></img>
              </a>
            </Link>
            <span>
              {item.title ? item.title : item.brand + ' ' + item.model},{' '}
              <NumberFormat
                value={item.price}
                displayType="text"
                thousandSeparator=" "
                suffix=" €"
                renderText={(value) => <>{value}</>}
              />
              , <Eye size={16} /> {item.views}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
