import React from 'react';
import { Layout } from '../components';
import {
  UploadPhotos,
  Stepper,
  Category,
  AdditionalInformation,
  PublicationAd,
} from '../components/PostAd';
import { usePostAd } from '../hooks';

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
    handleStepperStep,
    setStep,
    handleCategory,
    onSubmit,
    handleChange,
    handleExtrasChange,
    setPostAdState,
  } = usePostAd();

  return (
    <Layout
      pageTitle="Pridať inzerát - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <h4>Pridať inzerát</h4>
      <Stepper step={step} handleStepperStep={handleStepperStep} />
      {step === 'category' && <Category handleCategory={handleCategory} />}

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
          nextStep="publication-ad"
        />
      )}

      {step === 'publication-ad' && (
        <PublicationAd
          aid={postAdState.aid}
          category={postAdState.categoryType}
        />
      )}
    </Layout>
  );
};

export default PostAd;
