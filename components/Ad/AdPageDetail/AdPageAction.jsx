import React from 'react';
import { AdSendEmail } from './../AdSendEmail';

export const AdPageAction = (props) => {
  const { seller_name, mobile_number, user, email, location } = props;
  return (
    <div className="row">
      <div className="col-12">
        <button className="full-button mb-2">Predajca: {seller_name}</button>
        <button className="full-button mb-2">
          <a href={`tel:${mobile_number}`}>Zavolať {mobile_number}</a>
        </button>
        <AdSendEmail user={user} email={email} />
        <button className="full-button mb-2">Poloha: {location}</button>
      </div>
    </div>
  );
};
