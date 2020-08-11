import React from 'react';
import { PostAdGallery } from './index';
import { useUploadPhotos } from './../../hooks';

export const UploadPhotos = props => {
  const { aid, setPostAdState, postAdState, setStep } = props;
  const {
    handleSubmit,
    handleImageUpload,
    removePhoto,
    photos
  } = useUploadPhotos(aid, postAdState, setStep);
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <PostAdGallery
        photos={photos}
        setPostAdState={setPostAdState}
        postAdState={postAdState}
        removePhoto={removePhoto}
      />
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
