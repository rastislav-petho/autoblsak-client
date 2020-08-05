import React from "react";
import { Layout } from "../components";
import {
  UploadPhotos,
  Stepper,
  Category,
  AdditionalInformation,
  usePostAd
} from "./../components/PostAd";

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

  console.log(postAdState);

  return (
    <Layout
      pageTitle="Pridať inzerát - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <h4>Pridať inzerát</h4>
      <Stepper step={step} setStep={setStep} />
      {step === "category" && <Category handleClick={handleClick} />}

      {step === "additional-information" && (
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
      {step === "upload-photos" && (
        <UploadPhotos
          aid={postAdState.aid}
          setPostAdState={setPostAdState}
          postAdState={postAdState}
          setStep={setStep}
        />
      )}

      {step === "publication-ad" && <h5>Zverejnenie inzerátu</h5>}
    </Layout>
  );
};

export default PostAd;
