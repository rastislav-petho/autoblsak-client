import React, { useContext } from "react";
import { Context } from "../../context/context";
import fetch from "isomorphic-unfetch";
import { Layout, AdGallery } from "../../components";
import {
  getDateFromTimestamp,
  decodeFuel,
  decodeCoupe,
  decodeTransmision,
  decodeColor
} from "../../helpers";

const Inzerat = ({ data }) => {
  const { state, dispatch } = useContext(Context);
  const {
    id,
    brand,
    model,
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
    extras
  } = data;

  console.log(data);
  return (
    <Layout pageTitle="Autoblšák.sk" pageDescription="" pageKeywords="">
      <div className="row inzerat">
        <div className="col-12">
          <div className="row inzerat-titles">
            <div className="col-12 col-lg-6">
              <h1>
                {brand} {model}
              </h1>
              <span>ID inzerátu: {id}</span> -{" "}
              <span>Zverejnené: {getDateFromTimestamp(created)}</span> -{" "}
              <span className="badge badge-success">
                <i aria-hidden className="far fa-eye"></i> {views}
              </span>{" "}
              {premium ? (
                <span>
                  {" "}
                  - <span className="badge badge-danger">TOP</span>
                </span>
              ) : (
                ""
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
                  <tr>
                    <td>Palivo</td>
                    <th scope="row">{decodeFuel(fuel)}</th>
                  </tr>
                  <tr>
                    <td>Karoséria</td>
                    <th scope="row">{decodeCoupe(coupe)}</th>
                  </tr>
                  <tr>
                    <td>Prevodovka</td>
                    <th scope="row">{decodeTransmision(transmision)}</th>
                  </tr>
                  <tr>
                    <td>Výkon</td>
                    <th scope="row">{power} kW</th>
                  </tr>
                  <tr>
                    <td>Kubatúra</td>
                    <th scope="row">
                      {cubage} <sub>cm</sub>2
                    </th>
                  </tr>
                  <tr>
                    <td>Rok výroby</td>
                    <th scope="row">{year_of_manufacture}</th>
                  </tr>
                  <tr>
                    <td>Počet km</td>
                    <th scope="row">{mileage} km</th>
                  </tr>
                  <tr>
                    <td>Počet dverí</td>
                    <th scope="row">{number_of_doors}</th>
                  </tr>
                  <tr>
                    <td>Farba</td>
                    <th scope="row">{decodeColor(color)}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <button className="button w-100 mb-2">
              Predajca: {seller_name}
            </button>
            <button className="button w-100 mb-2">
              <a href={`tel:${mobile_number}`}>Zavolať predajcovi</a>
            </button>

            <button className="button w-100 mb-2">
              Poslať predajcovi správu
            </button>
            <button className="button w-100 mb-2">Poloha: {location}</button>
          </div>
        </div>
        <div className="col-12 mt-4">
          <div className="row">
            <div className="col-12">
              <h4>Ďalšie informácie</h4>
              <p>{additional_information}</p>
            </div>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://autoblsak.sk/api/api/ad/${params.id}`);
  const data = await res.json();
  return {
    props: { data }
  };
}

export default Inzerat;