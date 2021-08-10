import React, { useContext, useState } from 'react';
import { Layout, PageMenu } from '../components';
import { Context } from '../context/context';
import {
  ChangePassword,
  DeactiveAccount,
  PrivateInformation,
} from '../components/MyAds';
import { PageMenuItems } from '../helpers/types';

const Account = () => {
  const { state } = useContext(Context);
  const [step, setStep] = useState<string>('private-information');

  const pageMenuItems: PageMenuItems[] = [
    {
      step: 'private-information',
      label: 'Osobné informácie',
      className: `nav-link ${step === 'private-information' && 'active'}`,
    },
    {
      step: 'change-password',
      label: 'Zmena hesla',
      className: `nav-link ${step === 'change-password' && 'active'}`,
    },
    {
      step: 'deactive-account',
      label: 'Zrušiť účet',
      className: `nav-link ${step === 'deactive-account' && 'active'}`,
    },
  ];

  return (
    <Layout
      pageTitle="Zmena hesla - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <div className="row mb-3">
        <div className="col-12">
          <PageMenu setStep={setStep} items={pageMenuItems} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {step === 'private-information' && (
            <PrivateInformation user={state.user} />
          )}

          {step === 'change-password' && <ChangePassword />}

          {step === 'deactive-account' && <DeactiveAccount />}
        </div>
      </div>
    </Layout>
  );
};

export default Account;
