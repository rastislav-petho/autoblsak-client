import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from './../context/context';
import { useForm } from 'react-hook-form';

export const usePostAd = initialStep => {
  const { state, dispatch } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
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
    defaultPhoto: ''
  });

  const [step, setStep] = useState(initialStep);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [extras, setExtras] = useState([]);

  useEffect(() => {
    if (!state.user) {
      document.location.href = '/';
    }
  }, []);

  useEffect(() => {
    fetch(`${state.api}/filter/brands`)
      .then(res => res.json())
      .then(json => {
        setBrands(json);
      });
  }, []);

  useEffect(() => {
    if (postAdState.brand !== '') {
      fetch(`${state.api}/filter/models/${postAdState.brand}`)
        .then(res => res.json())
        .then(json => {
          setModels(json);
        });
    }
  }, [postAdState.brand]);

  useEffect(() => {
    fetch(`${state.api}/extras`)
      .then(res => res.json())
      .then(json => {
        setExtras(json);
      });
  }, []);

  function handleClick(value, step) {
    if (value === 'personal') {
      setPostAdState({
        ...postAdState,
        categoryType: value,
        category: '1'
      });
    } else {
      setPostAdState({
        ...postAdState,
        categoryType: value,
        category: ''
      });
    }
    setStep(step);
  }

  const onSubmit = data => {
    axios
      .post(`${state.api}/save-ad`, postAdState)
      .then(response => {
        if (response.status === 200) {
          setPostAdState({
            ...postAdState,
            aid: response.data
          });
          setStep('upload-photos');
        } else {
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'danger', message: response.data.error }
          });
        }
      })
      .then(error => {
        if (error) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'warning',
              message: 'Chyba ! Kontaktujte administrátora'
            }
          });
        }
      });
  };

  function handleChange(event) {
    setPostAdState({
      ...postAdState,
      [event.target.name]: event.target.value
    });
  }

  function handleExtrasChange(event) {
    const index = postAdState.adExtras.indexOf(event.target.name);
    console.log('index', index);
    if (index > -1) {
      postAdState.adExtras.splice(index, 1);
      setPostAdState({
        ...postAdState,
        adExtras: postAdState.adExtras
      });
    } else {
      setPostAdState({
        ...postAdState,
        adExtras: [...postAdState.adExtras, event.target.name]
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
    handleClick,
    onSubmit,
    handleChange,
    handleExtrasChange,
    setPostAdState
  };
};
