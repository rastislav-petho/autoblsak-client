import React from 'react';
import Link from 'next/link';
import { BackButton } from './BackButton';

export const PageMenu = (props) => {
  const { setStep, items } = props;
  return (
    <ul className="nav nav-tabs">
      <GoBack />
      {items.map((item, index) => (
        <NavItem
          key={index}
          className={item.className}
          adsCount={item.adsCount}
          label={item.label}
          step={item.step}
          setStep={setStep}
        />
      ))}
    </ul>
  );
};

const GoBack = () => (
  <li className="nav-item">
    <BackButton>
      <a className="nav-link">
        <i aria-hidden className="fas fa-chevron-left"></i>
      </a>
    </BackButton>
  </li>
);

const NavItem = (props) => {
  const { step, setStep, className, adsCount, label } = props;
  return (
    <li className="nav-item">
      <a onClick={() => setStep(step)} className={className} href="#">
        {label} {adsCount && `(${adsCount})`}
      </a>
    </li>
  );
};
