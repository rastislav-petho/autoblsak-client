import React from 'react';

export const AdPageAdditionalInformation = (props) => {
  const { additional_information } = props;
  return (
    <div className="col-12">
      <h4>Ďalšie informácie</h4>
      <p>{additional_information}</p>
    </div>
  );
};
