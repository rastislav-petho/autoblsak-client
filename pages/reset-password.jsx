import React from 'react';
import { Layout } from './../components';
import { useForm } from 'react-hook-form';
import { useApi } from './../hooks';
import Link from 'next/link';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const { resetPassword } = useApi();

  const onSubmit = (data) => {
    resetPassword(data);
  };

  return (
    <Layout pageTitle="Login - Autoblšák.sk" pageDescription="" pageKeywords="">
      <div className="row login-page">
        <div className="card">
          <div className="card-header text-center">
            <h5>Zabudnuté heslo</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  ref={register({ required: true })}
                ></input>
                {errors.email && errors.email.type === 'required' && (
                  <i className="text-danger">Email je povinný údaj.</i>
                )}
              </div>

              <div className="col-12 d-flex justify-content-center">
                <input type="submit" className="button" value="Odoslať" />
              </div>
            </form>
          </div>
          <div className="card-footer text-center">
            <p className="card-text">
              Ak nemáte ešte vytvorený účet, možete sa zaregistrovať{' '}
              <Link href="/register">
                <a>TU</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
