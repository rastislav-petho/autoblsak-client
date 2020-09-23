import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Context } from './../../context/context';

export const AdSendEmail = props => {
  const [sendEmail, setSendEmail] = useState(false);

  const { user, email } = props;
  const initialState = {
    name: user ? user.username : '',
    email: user ? user.email : '',
    message: '',
    adEmail: email
  };
  const [emailState, setEmailState] = useState(initialState);

  const { state, dispatch } = useContext(Context);

  const { register, handleSubmit, watch, errors } = useForm();

  const handleChange = event => {
    setEmailState({ ...emailState, [event.target.name]: event.target.value });
  };

  async function onSubmit(data) {
    axios
      .post(`${state.api}/contact-seller`, emailState)
      .then(response => {
        if (response.status === 200 && response.data.success) {
          setEmailState(initialState);
          setSendEmail(false);
          dispatch({
            type: 'SET_MESSAGE',
            message: { type: 'success', message: response.data.success }
          });
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
  }

  return (
    <>
      {!sendEmail ? (
        <button
          className="button w-100 mb-2"
          onClick={() => setSendEmail(true)}
        >
          Poslať predajcovi správu
        </button>
      ) : (
        <div className="card text-center w-100 mb-2">
          <div className="card-header">
            <h5>Poslať predajcovi správu</h5>
          </div>
          <div className="card-body text-left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Vaše meno</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={emailState.name}
                  onChange={event => handleChange(event)}
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && (
                  <i className="text-danger">Vaše meno je povinný údaj.</i>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Vaša e-mailová adresa</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={emailState.email}
                  onChange={event => handleChange(event)}
                  ref={register({
                    required: true,
                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                  })}
                />
                {(errors.email && errors.email.type === 'required' && (
                  <i className="text-danger">E-mail je povinný.</i>
                )) ||
                  (errors.email && errors.email.type === 'pattern' && (
                    <i className="text-danger">E-mail je v nesprávnom tvare.</i>
                  ))}
              </div>

              <div className="form-group">
                <label htmlFor="message">Vaša správa</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={emailState.message}
                  onChange={event => handleChange(event)}
                  ref={register({ required: true })}
                ></textarea>
                {errors.message && errors.message.type === 'required' && (
                  <i className="text-danger">Vaše správa je povinný údaj.</i>
                )}
              </div>
              <button type="submit" className="button w-100 mb-2">
                Odoslať
              </button>
            </form>
          </div>
          <div
            className="card-footer text-muted cursor-pointer"
            onClick={() => setSendEmail(false)}
          >
            zavrieť
          </div>
        </div>
      )}
    </>
  );
};
