import React from 'react';
import { Layout } from '../components';
import { Ad } from './../components/Ad';
import { useMyAds } from './../hooks';
import { MyAdsMenu, MyAdsHeader, MyAdsEditForm } from '../components/MyAds';

const MyAd = props => {
  const {
    step,
    setStep,
    myAds,
    state,
    handleRemove,
    handleActive,
    handleEdit,
    postAdState,
    brands,
    models,
    extras,
    handleChange,
    register,
    handleSubmit,
    errors,
    handleExtrasChange,
    onSubmit
  } = useMyAds();

  return (
    <Layout
      pageTitle="Moje inzeráty - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <div className="row mb-3">
        <div className="col-12">
          {state.user && (
            <MyAdsHeader
              userName={state.user.username}
              timeSignin={state.user.time_signin}
              adsCount={myAds.length}
            />
          )}
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
              handleEdit={handleEdit}
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
              handleEdit={handleEdit}
            />
          ))}

      {step === 'edit' && (
        <MyAdsEditForm
          postAdState={postAdState}
          brands={brands}
          models={models}
          extras={extras}
          handleChange={handleChange}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          handleExtrasChange={handleExtrasChange}
          onSubmit={onSubmit}
        />
      )}
    </Layout>
  );
};

export default MyAd;
