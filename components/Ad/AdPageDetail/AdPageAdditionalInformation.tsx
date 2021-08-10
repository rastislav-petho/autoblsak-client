import React, { FC } from 'react';

type AdPageAdditionalInformationProps = {
  additional_information: string;
};

export const AdPageAdditionalInformation: FC<AdPageAdditionalInformationProps> = (
  props
) => {
  const { additional_information } = props;
  return (
    <div className="col-12">
      <h6>Ďalšie informácie</h6>
      <p>{additional_information}</p>
    </div>
  );
};
