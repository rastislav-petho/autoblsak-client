import React, { FC } from 'react';

type Data = {
  guid: string;
  post_title: string;
};

type MagazineProps = {
  data: Data[];
};

export const Magazine: FC<MagazineProps> = (props) => {
  const { data } = props;
  return (
    <div className="magazine">
      <h5> Magazín</h5>
      {data.map((item, key) => (
        <p key={key}>
          <a href={item.guid}>{item.post_title}</a>
        </p>
      ))}
    </div>
  );
};
