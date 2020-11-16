import React, { useContext } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Context } from './../context/context';

export const CookiesSection = () => {
  const { state } = useContext(Context);
  const backgroundDark = '#1b2027';
  const backgroundLight = '#252422';
  const textDark = '#d65a31';
  const textLight = '#d90429';
  return (
    <CookieConsent
      location="bottom"
      buttonText="Súhlasím"
      cookieName="autoblsakAllowCookie"
      style={{
        background: state.theme === 'dark' ? backgroundDark : backgroundLight,
        //borderTop: `2px solid ${state.theme === 'dark' ? textDark : textLight}`,
        borderBottom: `2px solid ${
          state.theme === 'dark' ? textDark : textLight
        }`,
        color: state.theme === 'dark' ? textDark : '#ffffff',
        fontWeight: '600',
      }}
      buttonStyle={{
        color: state.theme === 'dark' ? backgroundDark : '#ffffff',
        background: state.theme === 'dark' ? textDark : textLight,
        fontSize: '13px',
        fontWeight: 600,
      }}
      expires={150}
    >
      Táto web stránka používa súbory cookies pre lepší zážitok z prehliadania.{' '}
    </CookieConsent>
  );
};
