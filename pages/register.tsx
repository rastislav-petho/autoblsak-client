import React, { FC } from 'react';
import { Layout } from '../components';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useApi } from '../hooks';

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  ochrana: boolean;
  podmienky: boolean;
  newsletter: boolean;
};

type RegisterProps = {};

const Register: FC<RegisterProps> = () => {
  const { register, handleSubmit, errors } = useForm();
  const { registration } = useApi();

  const onSubmit = (data: RegisterFormData) => {
    registration(data);
  };

  return (
    <Layout
      pageTitle="Registrácia - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <div className="row register-page">
        <div className="card">
          <div className="card-header text-center">
            <h5>Vytvorte si účet</h5>
            registrácia je zadarmo
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="username">Používateľské meno</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  ref={register({ required: true })}
                ></input>
                {errors.username && errors.username.type === 'required' && (
                  <i className="text-danger">
                    Používateľské meno je povinný údaj.
                  </i>
                )}
              </div>
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
              <div className="form-group">
                <label htmlFor="password">Heslo</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  ref={register({ required: true })}
                ></input>
                {errors.password && errors.password.type === 'required' && (
                  <i className="text-danger">Heslo je povinný údaj.</i>
                )}
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="ochrana"
                  value="true"
                  ref={register({ required: true })}
                />

                <span>
                  {' '}
                  Súhlasím s{' '}
                  <a
                    href="https://autoblsak.sk/page/privacy-policy"
                    target="_blank"
                  >
                    ochranou osobných údajov
                  </a>
                </span>
                {errors.ochrana && errors.ochrana.type === 'required' && (
                  <p>
                    <i className="text-danger">
                      Pré úspešnú registráciu musíte súhlasiť s ochranou
                      osobných údajov.
                    </i>
                  </p>
                )}
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  name="podmienky"
                  value="true"
                  ref={register({ required: true })}
                />

                <span>
                  {' '}
                  Súhlasím s{' '}
                  <a
                    href="https://autoblsak.sk/page/obchodne-podmienky"
                    target="_blank"
                  >
                    obchodnými podmienkami
                  </a>
                </span>
                {errors.podmienky && errors.podmienky.type === 'required' && (
                  <p>
                    <i className="text-danger">
                      Pré úspešnú registráciu musíte súhlasiť s obchodnými
                      podmienkami.
                    </i>
                  </p>
                )}
              </div>
              <div className="form-group">
                <input type="checkbox" name="newsletter" value="true" />{' '}
                <span>
                  {' '}
                  Súhlasím s posielaním reklamných a marketingových správ na
                  moju e-mailovú adresu
                </span>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <input type="submit" className="button" value="Zaregistrovať" />
              </div>
            </form>
          </div>
          <div className="card-footer text-center">
            <p className="card-text">
              Ak už máte vytvorený účet, možete sa prihlásiť{' '}
              <Link href="/login">
                <a>TU</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
