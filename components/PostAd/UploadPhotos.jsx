import React from 'react';
import { PostAdGallery, DropZone } from './index';
import { useUploadPhotos } from './../../hooks';
import { Loading } from './../../components';

export const UploadPhotos = (props) => {
  const { aid, setPostAdState, postAdState, setStep, nextStep } = props;
  const {
    handleSubmit,
    handleImageUpload,
    removePhoto,
    photos,
    loading,
  } = useUploadPhotos(aid, postAdState, setStep, nextStep);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <PostAdGallery
            photos={photos}
            setPostAdState={setPostAdState}
            postAdState={postAdState}
            removePhoto={removePhoto}
          />
        </>
      )}
      <DropZone handleImageUpload={handleImageUpload} />
      <div className="row text-center mt-3">
        <div className="col-12">
          <button className="button" onClick={handleSubmit}>
            Uložiť inzerát
          </button>
        </div>
      </div>
    </div>
  );
};
