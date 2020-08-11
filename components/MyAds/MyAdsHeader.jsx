import React from 'react';
import { getDateAndTimeFromTimestamp } from './../../helpers';

export const MyAdsHeader = props => {
  const { userName, timeSignin, adsCount } = props;
  return (
    <>
      <h4>Ahoj, {userName} </h4>
      <p>
        <strong>Posledné prihlásenie:</strong>{' '}
        {getDateAndTimeFromTimestamp(timeSignin)} <br />
        <strong>Počet Inzerátov:</strong> {adsCount}
      </p>
    </>
  );
};
