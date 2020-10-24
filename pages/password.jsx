import React, { useContext, useState } from 'react';
import { Layout } from './../components';
import { Context } from './../context/context';
import Reveal from 'react-reveal/Reveal';
import { ChangePassword, DeactiveAccount } from '../components/MyAds';
import Link from 'next/link';

const Password = () => {
  const { state, dispatch } = useContext(Context);
  const [step, setStep] = useState('change-password');

  return (
    <Layout
      pageTitle="Zmena hesla - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <Reveal>
        <div className="row mb-3">
          <div className="col-12">
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
                  onClick={() => setStep('change-password')}
                  className={`nav-link ${
                    step === 'change-password' && 'active'
                  }`}
                  href="#"
                >
                  Zmena hesla
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => setStep('deactive-account')}
                  className={`nav-link ${
                    step === 'deactive-account' && 'active'
                  }`}
                  href="#"
                >
                  Zrušiť účet
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
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

export default Password;
