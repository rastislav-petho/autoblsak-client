import { useContext, useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { Context } from '../context/context';
import axios from 'axios';

export const useUploadPhotos = (aid, postAdState, setStep, nextStep) => {
  const { state, dispatch } = useContext(Context);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${state.api}/upload-photos/${aid}`)
      .then(function (response) {
        if (response.status === 200) {
          setPhotos(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const getPhotos = () => {
    axios
      .get(`${state.api}/upload-photos/${aid}`)
      .then(function (response) {
        if (response.status === 200) {
          setPhotos(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removePhoto = (id) => {
    axios
      .post(`${state.api}/remove-photo`, { id: id })
      .then((response) => {
        if (response.data.error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: response.data.error,
            },
          });
        } else {
          getPhotos();
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'danger',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  async function handleImageUpload(event) {
    const imageFile = event.target.files[0];
    setLoading(true);
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);

      const formData = new FormData();
      formData.append('image', compressedFile);
      formData.append('aid', aid);
      formData.append('uid', state.user.id);

      fetch(`${state.api}/upload-photo`, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then(() => {
          getPhotos();
          setLoading(false);
        })

        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = () => {
    if (photos.length < 1) {
      dispatch({
        type: 'SET_MESSAGE',
        message: {
          type: 'warning',
          message:
            'Pre uloženie inzerátu je potrebné nahrať minimálne jednu fotografiu!',
        },
      });
    } else if (!postAdState.defaultPhoto) {
      dispatch({
        type: 'SET_MESSAGE',
        message: {
          type: 'warning',
          message: 'Nie je zvolená žiadna titulná fotografia!',
        },
      });
    } else {
      axios
        .post(`${state.api}/set-default-photo`, postAdState)
        .then((response) => {
          if (response.data.error) {
            dispatch({
              type: 'SET_MESSAGE',
              message: {
                type: 'warning',
                message: response.data.error,
              },
            });
          } else {
            setStep(nextStep);
          }
        })
        .then((error) => {
          if (error) {
            dispatch({
              type: 'SET_MESSAGE',
              message: {
                type: 'danger',
                message: 'Chyba ! Kontaktujte administrátora',
              },
            });
          }
        });
    }
  };

  return {
    handleSubmit,
    handleImageUpload,
    removePhoto,
    photos,
    loading,
  };
};
