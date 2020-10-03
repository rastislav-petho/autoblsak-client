import React from 'react';
import Link from 'next/link';

export const MyAdsMenu = (props) => {
  const { myAds, step, setStep } = props;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link">
            <i aria-hidden className="fas fa-chevron-left"></i>
          </a>
        </Link>
      </li>
      <li className="nav-item">
        <a
          onClick={() => setStep('active')}
          className={`nav-link ${step === 'active' && 'active'}`}
          href="#"
        >
          Aktívne ({myAds.filter((ad) => ad.status == 1).length})
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => setStep('inactive')}
          className={`nav-link ${step === 'inactive' && 'active'}`}
          href="#"
        >
          Neaktívne ({myAds.filter((ad) => ad.status != 1).length})
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => setStep('change-password')}
          className={`nav-link ${step === 'change-password' && 'active'}`}
          href="#"
        >
          Zmena hesla
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => setStep('deactive-account')}
          className={`nav-link ${step === 'deactive-account' && 'active'}`}
          href="#"
        >
          Zrušiť účet
        </a>
      </li>
    </ul>
  );
};
