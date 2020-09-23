import React, { useContext } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Context } from './../context/context';

export const CookiesSection = () => {
  const { state } = useContext(Context);
  return (
    <CookieConsent
      location="bottom"
      buttonText="Súhlasím"
      cookieName="konopnafarmaliptov"
      style={{
        background: state.theme === 'dark' ? '#393e46ea' : '#fbfbfbce',
        borderTop: `2px solid ${
          state.theme === 'dark' ? '#d65a31' : '#ff331f'
        }`,
        borderBottom: `2px solid ${
          state.theme === 'dark' ? '#d65a31' : '#ff331f'
        }`,
        color: state.theme === 'dark' ? '#d65a31' : '#ff331f',
        fontWeight: '600'
      }}
      buttonStyle={{
        color: state.theme === 'dark' ? '#d65a31' : '#ff331f',
        background: state.theme === 'dark' ? '#2B2834' : '#fbfbfb',
        fontSize: '13px'
      }}
      expires={150}
    >
      Táto web stránka používa súbory cookies pre lepší zážitok z prehliadania.{' '}
    </CookieConsent>
  );
};
