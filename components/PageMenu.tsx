import React, { FC } from 'react';
import { BackButton } from './BackButton';
import { AccountPageSteps, MyAdsSteps, PageMenuItems } from 'helpers/types';
import { ChevronLeft } from './Icons';

type PageMenuProps = {
  items: PageMenuItems[];
  setStep: (value: MyAdsSteps) => void;
};

export const PageMenu: FC<PageMenuProps> = (props) => {
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
        <ChevronLeft />
      </a>
    </BackButton>
  </li>
);

type NavItemProps = {
  step: MyAdsSteps | AccountPageSteps;
  className: string;
  adsCount?: number;
  label: string;
  setStep: (value: string) => void;
};

const NavItem: FC<NavItemProps> = (props) => {
  const { step, setStep, className, adsCount, label } = props;
  return (
    <li className="nav-item">
      <a onClick={() => setStep(step)} className={className} href="#">
        {label} {`(${adsCount})`}
      </a>
    </li>
  );
};
