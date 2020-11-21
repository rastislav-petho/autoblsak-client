import React from 'react';
import { useForm } from 'react-hook-form';
import { useApi } from './../hooks';
import Link from 'next/link';

export const Newsletter = () => {
  const { register, handleSubmit, errors } = useForm();
  const { newsletter } = useApi();
  const onSubmit = (data) => {
    newsletter(data);
  };

  console.log(errors.email);
  return (
    <div className="row newsletter">
      <div className="col-lg-12">
        <div className="jumbotron">
          <h2>Prihláste sa ešte dnes k odberu noviniek</h2>
          <p className="lead">
            Radi s vami budeme zdieľať najrôznejšie novinky, tipy a triky z
            automobilového prostredia, ale aj články, videá, odporúčania,
            pozvánky a mnoho iného. A to všetko úplne zadarmo! Všetko, čo musíte
            urobiť je prihlásiť sa so svojou e-mailovou adresou:
          </p>
          <hr className="my-4" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'E-mailová adresa je v nesprávnom tvare.',
                  },
                })}
              ></input>
              {(errors.email && errors.email.type === 'required' && (
                <i className="text-danger">E-mailová adresa je povinné pole.</i>
              )) ||
                (errors.email && errors.email.type === 'pattern' && (
                  <i className="text-danger">{errors.email.message}</i>
                ))}
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="gdpr"
                name="gdpr"
                value="1"
                ref={register({
                  required: true,
                })}
              ></input>
              <span>
                {' '}
                Súhlasím s{' '}
                <Link href="/page/ochrana-osobnych-udajov">
                  <a>ochranou osobných údajov</a>
                </Link>
              </span>

              <br />
              {errors.gdpr && errors.gdpr.type === 'required' && (
                <i className="text-danger">
                  Musíte súhlasiť so spracovaním osobných údajov.
                </i>
              )}
            </div>
            <input type="submit" className="full-button mt-3" value="Odoslať" />
          </form>
        </div>
      </div>
    </div>
  );
};
