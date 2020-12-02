import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from './../context/context';
import { useForm } from 'react-hook-form';
import { useApi } from './../hooks';
import { scrollToTop } from '../helpers';

export const usePostAd = () => {
  const { state, dispatch } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const { getBrands, getModels, getExtras } = useApi();
  const [postAdState, setPostAdState] = useState({
    categoryType: '',
    userId: state.user && state.user.id,
    aid: '',
    category: '',
    title: '',
    brand: '',
    model: '',
    coupe: '',
    fuel: '',
    transmision: '',
    color: '',
    power: '',
    mileage: '',
    cubage: '',
    year_of_manufacture: '',
    number_of_doors: '',
    price: '',
    adExtras: [],
    additional_information: '',
    seller_name: '',
    mobile_number: '',
    email: state.user && state.user.email,
    location: '',
    defaultPhoto: '',
  });

  const [step, setStep] = useState('category');
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    if (!state.user) {
      document.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    getBrands(setBrands);
  }, []);

  useEffect(() => {
    if (postAdState.brand !== '') {
      getModels(setModels, postAdState.brand);
    }
  }, [postAdState.brand]);

  useEffect(() => {
    getExtras(setExtras);
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [step]);

  function handleCategory(value, step) {
    if (value === 'personal') {
      setPostAdState({
        ...postAdState,
        categoryType: value,
        category: '1',
      });
    } else {
      setPostAdState({
        ...postAdState,
        categoryType: value,
        category: '',
      });
    }
    setStep(step);
  }

  const onSubmit = (data) => {
    axios
      .post(`${state.api}/save-ad`, postAdState)
      .then((response) => {
        if (response.status === 200) {
          setPostAdState({
            ...postAdState,
            aid: response.data,
          });
          setStep('upload-photos');
        } else {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'danger', message: response.data.error },
          });
        }
      })
      .then((error) => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora',
            },
          });
        }
      });
  };

  function handleChange(event) {
    setPostAdState({
      ...postAdState,
      [event.target.name]: event.target.value,
    });
  }

  function handleExtrasChange(event) {
    const index = postAdState.adExtras.indexOf(event.target.name);
    if (index > -1) {
      postAdState.adExtras.splice(index, 1);
      setPostAdState({
        ...postAdState,
        adExtras: postAdState.adExtras,
      });
    } else {
      setPostAdState({
        ...postAdState,
        adExtras: [...postAdState.adExtras, event.target.name],
      });
    }
  }

  return {
    register,
    errors,
    handleSubmit,
    postAdState,
    brands,
    models,
    extras,
    step,
    setStep,
    handleCategory,
    onSubmit,
    handleChange,
    handleExtrasChange,
    setPostAdState,
  };
};
