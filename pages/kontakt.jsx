import React, { useContext } from 'react';
import { Layout } from './../components';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Context } from './../context/context';

const Kontakt = () => {
  const { state, dispatch } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${state.api}/contact-form`, data)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: 'SET_MESSAGE',
            message: {
              type: 'success',
              message: response.data.success,
            },
          });
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

  return (
    <Layout
      pageTitle="Kontakt - Autoblšák.sk"
      pageDescription=""
      pageKeywords=""
    >
      <div className="row">
        <div className="col-12 col-lg-6">
          <h4>Kontakt</h4>
          <p>
            Hľadáte kontakt na redakciu magazínu Autoblšak? V prípade
            akýchkoľvek otázok, postrehov či námetov nás neváhajte kontaktovať.
            Snažíme sa odpovedať v čo najkratšom časovom intervale. Ak by Vám
            však nepriešiel e-mail s odpoveďou do 7 dní, presvedčte sa prosím,
            či ste ho skutočne odoslali.
          </p>
          <p>
            V závislosti od toho, čo konkrétne potrebujete, môžete použiť
            nasledovné e-maily:
          </p>
          <ul>
            <li>
              V prípade otázok, postrehov či námetov nás neváhajte kontaktovať:
              info@autoblsak.sk
            </li>
            <li>Redakcia magazínu Autoblšak: redakcia@autoblsak.sk</li>
            <li>
              Svoje otázky ohľadom reklamy môžete posielať:
              marketing@autoblsak.sk
            </li>
          </ul>
          <p>
            <i>
              Samozrejme, že môžete napísať na ktorýkoľvek e-mail a odpoveď Vám
              bude doručená.
            </i>
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <h6>Kontaktný formulár</h6>
          <p>
            Kontaktovať nás môžete aj prostredníctvom nasledujúceho rýchleho
            formulára:
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group col-12 col-lg-6">
                <label htmlFor="name">Vaše meno</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  ref={register({ required: true })}
                />
                {errors.name && errors.name.type === 'required' && (
                  <i className="text-danger">Vaše meno je povinný údaj.</i>
                )}
              </div>
              <div className="form-group col-12 col-lg-6">
                <label htmlFor="email">Vaša emailová adresa</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  ref={register({ required: true })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <i className="text-danger">Vaše email je povinný údaj.</i>
                )}
              </div>
            </div>

            <div className="form-group col-12 col-lg-12 p-0">
              <label htmlFor="subject">Predmet</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                ref={register({ required: true })}
              />
              {errors.subject && errors.subject.type === 'required' && (
                <i className="text-danger">Predmet je povinný údaj.</i>
              )}
            </div>
            <div className="form-group col-12 col-lg-12 p-0">
              <label for="content">Správa</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                rows="10"
                ref={register({ required: true })}
              ></textarea>
              {errors.content && errors.content.type === 'required' && (
                <i className="text-danger">Správa je povinný údaj.</i>
              )}
            </div>
            <input className="button" type="submit" name="submit" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Kontakt;
