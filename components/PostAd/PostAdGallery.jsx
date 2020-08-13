import React, { useContext } from 'react';
import { Context } from '../../context/context';

export const PostAdGallery = props => {
  const { photos, setPostAdState, postAdState, removePhoto } = props;
  const { state } = useContext(Context);

  const selectDefaultPhoto = item => {
    setPostAdState({
      ...postAdState,
      defaultPhoto: item.id
    });
  };

  return (
    <div className="row mt-3">
      <div className="col-12 pl-5 pr-5">
        {photos.length > 0 && <p>Vyberte jednu titulnú fotku</p>}
        <div className="row">
          {photos.map(item => (
            <div
              key={item.id}
              className={`${
                postAdState.defaultPhoto == item.id && 'default-photo'
              } col-12 col-md-6 col-lg-2 p-1 text-center`}
            >
              <img
                className="w-100 cursor-pointer"
                alt={item.photo}
                src={`${state.url}/${item.photo}`}
                onClick={() => selectDefaultPhoto(item)}
              />
              <i
                onClick={() => removePhoto(item.id)}
                aria-hidden
                className="fas fa-times cursor-pointer"
              ></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
