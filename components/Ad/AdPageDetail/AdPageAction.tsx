import React, { FC } from 'react';
import { User } from 'helpers/types';
import { AdSendEmail } from '../AdSendEmail';

type AdPageActionProps = {
  seller_name: string;
  mobile_number: string;
  user: User;
  email: string;
  location: string;
};

export const AdPageAction: FC<AdPageActionProps> = (props) => {
  const { seller_name, mobile_number, user, email, location } = props;
  return (
    <div className="row">
      <div className="col-12">
        <button className="full-button mb-2" disabled>
          Predajca: {seller_name}
        </button>
        <button className="full-button mb-2">
          <a href={`tel:${mobile_number}`}>Zavolať {mobile_number}</a>
        </button>
        <AdSendEmail user={user} email={email} />
        <button className="full-button mb-2" disabled>
          Poloha: {location}
        </button>
      </div>
    </div>
  );
};
