import React from 'react';
import { Layout } from '../components';
import {
  UploadPhotos,
  Stepper,
  Category,
  AdditionalInformation,
  PublicationAd
} from './../components/PostAd';
import { usePostAd } from './../hooks';

const PostAd = () => {
  const {
    register,
    errors,
    handleSubmit,
    postAdState,
    brands,
    models,
    extras,
    step,
    setStep,
    handleClick,
    onSubmit,
    handleChange,
    handleExtrasChange,
    setPostAdState
  } = usePostAd();

  return (
    <Layout
      pageTitle="Pridať inzerát - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <h4>Pridať inzerát</h4>
      <Stepper step={step} setStep={setStep} />
      {step === 'category' && <Category handleClick={handleClick} />}

      {step === 'additional-information' && (
        <AdditionalInformation
          brands={brands}
          models={models}
          extras={extras}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          handleChange={handleChange}
          handleExtrasChange={handleExtrasChange}
          onSubmit={onSubmit}
          postAdState={postAdState}
        />
      )}
      {step === 'upload-photos' && (
        <UploadPhotos
          aid={postAdState.aid}
          setPostAdState={setPostAdState}
          postAdState={postAdState}
          setStep={setStep}
        />
      )}

      {step === 'publication-ad' && <PublicationAd aid={postAdState.aid} />}
    </Layout>
  );
};

export default PostAd;
