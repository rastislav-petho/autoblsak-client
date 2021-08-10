import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useApi } from './../../hooks/useApi';

type ChangePasswordFormData = {
  oldPass: string;
  password: string;
  passwordAgain: string;
};

type ChangePasswordProps = {};

export const ChangePassword: FC<ChangePasswordProps> = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const { changePassword } = useApi();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data: ChangePasswordFormData) => {
    changePassword(data);
  };

  return (
    <div className="row changepassword-page">
      <div className="card">
        <div className="card-header text-center">
          <h5>Zmena hesla</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="oldPass">Staré heslo</label>
              <input
                type="password"
                className="form-control"
                id="oldPass"
                name="oldPass"
                ref={register({ required: true })}
              ></input>
              {errors.oldPass && errors.oldPass.type === 'required' && (
                <i className="text-danger">Staré heslo je povinný údaj.</i>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Nové heslo</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                ref={register({
                  required: 'Nové heslo je povinný údaj',
                  minLength: {
                    value: 8,
                    message: 'Heslo musí obsahovať minimálne 8 znakov',
                  },
                })}
              ></input>
              {errors.password && (
                <i className="text-danger">{errors.password.message}</i>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="passwordAgain">Potvrdiť nové heslo</label>
              <input
                type="password"
                className="form-control"
                id="passwordAgain"
                name="passwordAgain"
                ref={register({
                  validate: (value) =>
                    value === password.current || 'Heslá sa nezhodujú',
                })}
              ></input>
              {errors.passwordAgain && (
                <i className="text-danger">{errors.passwordAgain.message}</i>
              )}
            </div>

            <div className="col-12 d-flex justify-content-center">
              <input type="submit" className="button" value="Zmeniť heslo" />
            </div>
          </form>
        </div>
        <div className="card-footer text-center"></div>
      </div>
    </div>
  );
};
