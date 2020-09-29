import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const MostView = props => {
  const { apiUrl, url } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/most-view`)
      .then(res => res.json())
      .then(json => {
        setData(json.data);
      });
  }, []);

  return (
    <div className="most-view">
      <h6>Napozeranejšie inzeráty</h6>
      <div className="row">
        {data.map(item => (
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
              {item.brand} {item.model}, {item.price} €,{' '}
              <i aria-hidden className="far fa-eye"></i> {item.views}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};