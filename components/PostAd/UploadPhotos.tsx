import React, { FC } from "react";
import { PostAdGallery, DropZone } from "./index";
import { MyAdStateType, PostAdStateType, useUploadPhotos } from "../../hooks";
import { Loading } from "..";
import { MyAdsSteps, PostAdSteps } from "helpers/types";

type UploadPhotosProps = {
  aid: number;
  nextStep: PostAdSteps | MyAdsSteps;
  postAdState: PostAdStateType | MyAdStateType;
  setPostAdState: any;
  setStep: any;
};

export const UploadPhotos: FC<UploadPhotosProps> = (props) => {
  const { aid, setPostAdState, postAdState, setStep, nextStep } = props;
  const {
    handleSubmit,
    handleImageUpload,
    removePhoto,
    photos,
    loading,
    setCountOfFiles,
  } = useUploadPhotos(aid, postAdState, setStep, nextStep);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DropZone
            handleImageUpload={handleImageUpload}
            setCountOfFiles={setCountOfFiles}
          />
          <PostAdGallery
            photos={photos}
            setPostAdState={setPostAdState}
            postAdState={postAdState}
            removePhoto={removePhoto}
          />
        </>
      )}

      <div className="row text-center mt-3">
        <div className="col-12">
          <button className="button" onClick={handleSubmit}>
            Pridať inzerát
          </button>
        </div>
      </div>
    </div>
  );
};
