import React from 'react';

export const AdPageAdditionalInformation = (props) => {
  const { additional_information } = props;
  return (
    <div className="col-12">
      <h6>Ďalšie informácie</h6>
      <p>{additional_information}</p>
    </div>
  );
};
