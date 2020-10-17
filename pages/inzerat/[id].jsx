import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/context';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import { Layout } from '../../components';
import { AdGallery, AdSendEmail } from '../../components/Ad';
import Reveal from 'react-reveal/Reveal';
import Link from 'next/link';
import {
  getDateFromTimestamp,
  decodeFuel,
  decodeCoupe,
  decodeTransmision,
  decodeColor,
} from '../../helpers';

const Inzerat = ({ data }) => {
  const { state } = useContext(Context);

  const {
    id,
    title,
    brand_label,
    model_label,
    price,
    created,
    views,
    premium,
    photos,
    fuel,
    coupe,
    transmision,
    power,
    cubage,
    year_of_manufacture,
    mileage,
    number_of_doors,
    color,
    seller_name,
    mobile_number,
    location,
    additional_information,
    extras,
    email,
  } = data;

  useEffect(() => {
    const data = { id: id, views: views + 1 };
    axios.post(`${state.api}/ad/updateviews`, data).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Layout
      pageTitle={`${
        title ? title : brand_label + ' ' + model_label
      } - Autoblšák.sk`}
      pageDescription={additional_information}
      pageKeywords=""
    >
      <Reveal>
        <div className="row inzerat">
          <div className="col-12">
            <div className="row inzerat-titles">
              <div className="col-12">
                <h5>
                  <Link href={`/`} as={`/`}>
                    <a>
                      <i aria-hidden className="fas fa-chevron-left"></i>
                    </a>
                  </Link>
                </h5>
              </div>
              <div className="col-12 col-lg-6">
                <h1>{title ? title : brand_label + ' ' + model_label}</h1>
                <span>ID inzerátu: {id}</span> -{' '}
                <span>Zverejnené: {getDateFromTimestamp(created)}</span> -{' '}
                <span className="badge badge-success">
                  <i aria-hidden className="far fa-eye"></i> {views}
                </span>{' '}
                {premium ? (
                  <span>
                    {' '}
                    - <span className="badge badge-danger">TOP</span>
                  </span>
                ) : (
                  ''
                )}
              </div>
              <div className="col-12 col-lg-6 text-lg-right">
                <h1>{price} €</h1>
                {/* {state.favoriteAds.find(ad => ad.id === id) ? (
                <i
                  aria-hidden
                  className="fas fa-star add-to-favorites-button"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    dispatch({ type: "ADD_TO_FAVORITES", ad: data })
                  }
                  aria-hidden
                  className="far fa-star add-to-favorites-button"
                ></i>
              )} */}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8 mt-4">
            <div className="row">
              <div className="col-12">
                <div className="gallery-items">
                  <AdGallery photos={photos} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mt-4">
            <div className="row">
              <div className="col-12">
                <table className="table">
                  <tbody>
                    {fuel && (
                      <tr>
                        <th scope="row">Palivo</th>
                        <td>{decodeFuel(fuel)}</td>
                      </tr>
                    )}
                    {coupe && (
                      <tr>
                        <th scope="row">Karoséria</th>
                        <td>{decodeCoupe(coupe)}</td>
                      </tr>
                    )}
                    {transmision && (
                      <tr>
                        <th scope="row">Prevodovka</th>
                        <td>{decodeTransmision(transmision)}</td>
                      </tr>
                    )}
                    {power && (
                      <tr>
                        <th scope="row">Výkon</th>
                        <td>{power} kW</td>
                      </tr>
                    )}
                    {cubage && (
                      <tr>
                        <th scope="row">Kubatúra</th>
                        <td>{cubage} cm&sup3;</td>
                      </tr>
                    )}
                    {year_of_manufacture && (
                      <tr>
                        <th scope="row">Rok výroby</th>
                        <td>{year_of_manufacture}</td>
                      </tr>
                    )}
                    {mileage && (
                      <tr>
                        <th scope="row">Počet km</th>
                        <td>{mileage} km</td>
                      </tr>
                    )}
                    {number_of_doors && (
                      <tr>
                        <th scope="row">Počet dverí</th>
                        <td>{number_of_doors}</td>
                      </tr>
                    )}
                    {color && (
                      <tr>
                        <th scope="row">Farba</th>
                        <td>{decodeColor(color)}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="full-button mb-2">
                  Predajca: {seller_name}
                </button>
                <button className="full-button mb-2">
                  <a href={`tel:${mobile_number}`}>Zavolať predajcovi</a>
                </button>
                <AdSendEmail user={state.user} email={email} />
                <button className="full-button mb-2">Poloha: {location}</button>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row">
              {additional_information && (
                <div className="col-12">
                  <h4>Ďalšie informácie</h4>
                  <p>{additional_information}</p>
                </div>
              )}
              {extras.length > 0 && (
                <>
                  <div className="col-12 col-md-6 col-lg-3">
                    <h6>Bezpečnosť</h6>
                    <ul>
                      {extras.map(
                        (item, key) =>
                          item.extra_category_id === 1 && (
                            <li key={key}>{item.extra}</li>
                          )
                      )}
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <h6>Komfort</h6>
                    <ul>
                      {extras.map(
                        (item, key) =>
                          item.extra_category_id === 2 && (
                            <li key={key}>{item.extra}</li>
                          )
                      )}
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <h6>Ochrana</h6>
                    <ul>
                      {extras.map(
                        (item, key) =>
                          item.extra_category_id === 5 && (
                            <li key={key}>{item.extra}</li>
                          )
                      )}
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <h6>Exterier</h6>
                    <ul>
                      {extras.map(
                        (item, key) =>
                          item.extra_category_id === 3 && (
                            <li key={key}>{item.extra}</li>
                          )
                      )}
                    </ul>

                    <h6>Interier</h6>
                    <ul>
                      {extras.map(
                        (item, key) =>
                          item.extra_category_id === 6 && (
                            <li key={key}>{item.extra}</li>
                          )
                      )}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://autoblsak.sk/api/api/ad/${params.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Inzerat;
