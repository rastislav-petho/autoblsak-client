import { PhotoType } from 'helpers/types';
import { MyAdStateType, PostAdStateType } from 'hooks';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
} from 'react';
import { Context } from '../../context/context';
import { Times } from '../Icons';

type PostAdGalleryProps = {
  photos: PhotoType[];
  postAdState: PostAdStateType | MyAdStateType;
  setPostAdState: Dispatch<SetStateAction<PostAdStateType>>;
  removePhoto: (id: number) => void;
};

export const PostAdGallery: FC<PostAdGalleryProps> = (props) => {
  const { photos, setPostAdState, postAdState, removePhoto } = props;
  const { state } = useContext(Context);

  useEffect(() => {
    photos.map((item) => {
      if (item.default_photo == 1) {
        setPostAdState((prevState) => {
          return {
            ...prevState,
            defaultPhoto: item.id,
          };
        });
      }
    });
  }, [photos]);

  const selectDefaultPhoto = (item) => {
    setPostAdState((prevState) => {
      return {
        ...prevState,
        defaultPhoto: item.id,
      };
    });
  };

  return (
    <div className="row mt-3">
      <div className="col-12 pl-5 pr-5">
        {photos.length > 0 && !postAdState.defaultPhoto && (
          <p>Vyberte jednu titulnú fotku</p>
        )}
        <div className="row">
          {photos.map((item) => (
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
                className="cursor-pointer"
              >
                <Times size={16} />
              </i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
