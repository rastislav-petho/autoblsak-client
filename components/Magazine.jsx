import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';

export const Magazine = (props) => {
  const { apiUrl } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${apiUrl}/magazine`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="magazine">
      <h5> Magazín</h5>
      {loading ? (
        <Loading />
      ) : (
        data.map((item, key) => (
          <p key={key}>
            <a href={item.guid}>{item.post_title}</a>
          </p>
        ))
      )}
    </div>
  );
};
