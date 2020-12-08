import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NumberFormat from 'react-number-format';
import { Loading } from './Loading';

export const MostView = (props) => {
  const { apiUrl, url } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}/most-view`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="most-view">
      <h5>Napozeranejšie inzeráty</h5>
      <div className="row">
        {loading ? (
          <Loading />
        ) : (
          data.map((item) => (
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
          ))
        )}
      </div>
    </div>
  );
};
