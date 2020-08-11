import React from 'react';
import { Layout } from '../components';
import { Ad } from './../components/Ad';
import { useMyAds } from './../hooks';
import { MyAdsMenu, MyAdsHeader } from '../components/MyAds';

const MyAd = () => {
  const {
    step,
    setStep,
    myAds,
    state,
    handleRemove,
    handleActive
  } = useMyAds();

  const { username, time_signin } = state.user;

  return (
    <Layout
      pageTitle="Moje inzeráty - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <div className="row mb-3">
        <div className="col-12">
          <MyAdsHeader
            userName={username}
            timeSignin={time_signin}
            adsCount={myAds.length}
          />
        </div>
        <div className="col-12">
          <MyAdsMenu myAds={myAds} step={step} setStep={setStep} />
        </div>
      </div>
      {step === 'active' &&
        myAds
          .filter(ad => ad.status == 1)
          .map(ad => (
            <Ad
              ad={ad}
              actionBar={true}
              key={ad.id}
              handleRemove={handleRemove}
              handleActive={handleActive}
              setStep={setStep}
            />
          ))}
      {step === 'inactive' &&
        myAds
          .filter(ad => ad.status != 1)
          .map(ad => (
            <Ad
              ad={ad}
              actionBar={true}
              key={ad.id}
              handleRemove={handleRemove}
              handleActive={handleActive}
              setStep={setStep}
            />
          ))}

      {step === 'edit' && <p>Edit</p>}
    </Layout>
  );
};

export default MyAd;
