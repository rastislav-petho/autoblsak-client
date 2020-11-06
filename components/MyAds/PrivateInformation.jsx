import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useApi } from './../../hooks/useApi';

export const PrivateInformation = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors, watch } = useForm();
  const [state, setState] = useState(user);
  const { editAccount } = useApi();

  const onSubmit = (data) => {
    editAccount(state);
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="row private-information-page">
      <div className="card">
        <div className="card-header text-center">
          <h5>Osobné informácie</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username">Meno</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                ref={register({ required: true })}
                value={state.username}
                onChange={(event) => handleChange(event)}
              ></input>
              {errors.username && errors.username.type === 'required' && (
                <i className="text-danger">Meno je povinný údaj.</i>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                ref={register({ required: true })}
                value={state.email}
                onChange={(event) => handleChange(event)}
              ></input>
              {errors.email && errors.email.type === 'required' && (
                <i className="text-danger">{errors.email.message}</i>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mobile_number">Tel. číslo</label>
              <input
                type="text"
                className="form-control"
                id="mobile_number"
                name="mobile_number"
                ref={register({ required: true })}
                value={state.mobile_number}
                onChange={(event) => handleChange(event)}
              ></input>
              {errors.mobile_number &&
                errors.mobile_number.type === 'required' && (
                  <i className="text-danger">{errors.mobile_number.message}</i>
                )}
            </div>

            <div className="col-12 d-flex justify-content-center">
              <input type="submit" className="button" value="Uložiť" />
            </div>
          </form>
        </div>
        <div className="card-footer text-center"></div>
      </div>
    </div>
  );
};
