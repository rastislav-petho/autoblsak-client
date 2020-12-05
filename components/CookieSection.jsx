import React, { useContext } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Context } from './../context/context';

export const CookiesSection = () => {
  const { state } = useContext(Context);
  const backgroundDark = '#18191a';
  const backgroundLight = '#252422';
  const textDark = '#e8373e';
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
      Používame cookies, aby sme pre Vás zabezpečili ten najlepší zážitok z
      našich webových stránok. Ak budete pokračovať v používaní tejto
      webstránky, budeme predpokladať, že ste s ňou spokojní.{' '}
    </CookieConsent>
  );
};
