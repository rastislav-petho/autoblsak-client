import { useContext, useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { Context } from '../context/context';
import axios from 'axios';

export const useUploadPhotos = (aid, postAdState, setStep, nextStep) => {
  const { state, dispatch } = useContext(Context);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copressedFiles, setCompressedFiles] = useState([]);
  const [countOfFiles, setCountOfFiles] = useState(0);

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    if (countOfFiles === copressedFiles.length && countOfFiles !== 0) {
      handleSubmitUploadPhotos();
    }
  }, [copressedFiles]);

  const handleSubmitUploadPhotos = () => {
    const formData = new FormData();

    for (var i = 0; i < copressedFiles.length; i++) {
      formData.append('data[]', copressedFiles[i]);
    }
    formData.append('aid', aid);
    formData.append('uid', state.user.id);

    fetch(`${state.api}/upload-photo`, {
      method: 'POST',
      body: formData,
      headers: {
        token: state.user.token,
      },
    })
      .then((response) => response.json())
      .then(() => {
        setLoading(false);
        getPhotos();
        setCompressedFiles([]);
        setCountOfFiles(0);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const getPhotos = () => {
    axios
      .get(`${state.api}/upload-photos/${aid}`)
      .then(function (response) {
        if (response.status === 200) {
          setPhotos(response.data);
        }
      })
      .catch(function (error) {
        throw new Error(error);
      });
  };

  const removePhoto = (id) => {
    axios
      .post(
        `${state.api}/remove-photo`,
        { id: id },
        { headers: { token: state.user.token } }
      )
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

  async function handleImageUpload(file) {
    setLoading(true);
    const imageFile = file;
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);

      setCompressedFiles((prevState) => [...prevState, compressedFile]);
    } catch (error) {
      throw new Error(error);
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
    setCountOfFiles,
  };
};
