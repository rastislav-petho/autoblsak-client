import React, { useContext, useState } from 'react';
import { Layout, PageMenu } from '../components';
import { Context } from '../context/context';
import Reveal from 'react-reveal/Reveal';
import {
  ChangePassword,
  DeactiveAccount,
  PrivateInformation,
} from '../components/MyAds';

const Account = () => {
  const { state } = useContext(Context);
  const [step, setStep] = useState('private-information');

  const pageMenuItems = [
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
      <Reveal>
        <div className="row mb-3">
          <div className="col-12">
            <PageMenu setStep={setStep} items={pageMenuItems} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {step === 'private-information' && (
              <Reveal>
                <PrivateInformation user={state.user} />
              </Reveal>
            )}

            {step === 'change-password' && (
              <Reveal>
                <ChangePassword />
              </Reveal>
            )}

            {step === 'deactive-account' && (
              <Reveal>
                <DeactiveAccount />
              </Reveal>
            )}
          </div>
        </div>
      </Reveal>
    </Layout>
  );
};

export default Account;
