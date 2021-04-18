import React, { FC } from 'react';
import Link from 'next/link';
import NumberFormat from 'react-number-format';

type Data = {
  brand: string | null;
  brand_id: number | null;
  defaultPhoto: { photo: string };
  id: number;
  model: string | null;
  model_id: number | null;
  price: number;
  title: string | null;
  uid: number;
  views: number | null;
};

type MostViewProps = {
  data: Data[];
  url: string;
};

export const MostView: FC<MostViewProps> = (props) => {
  const { data, url } = props;

  return (
    <div className="most-view">
      <h5>Najpozeranejšie inzeráty</h5>
      <div className="row">
        {data.map((item) => (
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
              , <i aria-hidden className="far fa-eye"></i> {item.views}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
