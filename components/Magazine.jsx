import React from 'react';

export const Magazine = (props) => {
  const { data } = props;
  return (
    <div className="magazine">
      <h5> Magazín</h5>
      {data.data.map((item, key) => (
        <p key={key}>
          <a href={item.guid}>{item.post_title}</a>
        </p>
      ))}
    </div>
  );
};
