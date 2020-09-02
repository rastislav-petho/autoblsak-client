import React, { useEffect, useState } from 'react';

export const Magazine = props => {
  const { apiUrl } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/magazine`)
      .then(res => res.json())
      .then(json => {
        setData(json.data);
      });
  }, []);

  return (
    <div className="magazine">
      <h6>Magazín</h6>
      {data.map((item, key) => (
        <p key={key}>
          <a href={item.guid}>{item.post_title}</a>
        </p>
      ))}
    </div>
  );
};
