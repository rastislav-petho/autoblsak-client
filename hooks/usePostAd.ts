import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../context/context';
import { useForm } from 'react-hook-form';
import { useApi } from '.';
import { scrollToTop } from '../helpers';
import { BrandType, CategoryType, ExtraType, ModelType, PostAdSteps } from 'helpers/types';

export type PostAdStateType = {
  categoryType: CategoryType;
  userId: number;
  aid: number;
  category: string;
  title: string;
  brand: string;
  model: string;
  coupe: string;
  fuel: string;
  transmision: string;
  color: string;
  power: string;
  mileage: string;
  cubage: string;
  year_of_manufacture: string;
  number_of_doors: string;
  price: string;
  adExtras: string[];
  additional_information: string;
  seller_name: string;
  mobile_number: string;
  email: string;
  location: string;
  defaultPhoto: number;
};

export const usePostAd = () => {
  const { state, dispatch } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const { getBrands, getModels, getExtras } = useApi();

  const defaultPostAdState = {
    categoryType: undefined,
    userId: state.user && state.user.id,
    aid: null,
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
    defaultPhoto: null,
  };

  const [postAdState, setPostAdState] = useState<PostAdStateType>(defaultPostAdState);
  const [step, setStep] = useState<PostAdSteps>('category');
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [models, setModels] = useState<ModelType[]>([]);
  const [extras, setExtras] = useState<ExtraType[]>([]);

  useEffect(() => {
    if (!state.user) {
      document.location.href = '/login';
    }
  }, []);

  useEffect(() => {
    getBrands(setBrands);
  }, []);

  useEffect(() => {
    if (postAdState.brand !== null) {
      getModels(setModels, parseInt(postAdState.brand));
    }
  }, [postAdState.brand]);

  useEffect(() => {
    getExtras(setExtras);
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [step]);

  const handleStepperStep = (nextStep: PostAdSteps) => {
    if (nextStep === 'category') {
      setPostAdState(defaultPostAdState);
    }
    setStep(nextStep);
  };

  function handleCategory(value: CategoryType, step: PostAdSteps) {
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

  const onSubmit = () => {
    axios
      .post(`${state.api}/save-ad`, postAdState, {
        headers: { token: state.user.token },
      })
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
        if (error as any) {
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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPostAdState({
      ...postAdState,
      [event.target.name]: event.target.value,
    });
  }

  function handleExtrasChange(event: React.ChangeEvent<HTMLInputElement>) {
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
    handleStepperStep,
    handleCategory,
    onSubmit,
    handleChange,
    handleExtrasChange,
    setPostAdState,
  };
};
