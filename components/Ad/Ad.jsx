import React, { useContext, memo } from "react";
import { Context } from "../../context/context";
import Link from "next/link";
import {
  decodeFuel,
  decodeColor,
  decodeTransmision,
  decodeCoupe
} from "../../helpers";

export const Ad = memo(props => {
  const {
    id,
    year_of_manufacture,
    fuel,
    power,
    mileage,
    price,
    defaultPhoto,
    transmision,
    cubage,
    color,
    number_of_doors,
    premium,
    coupe
  } = props.ad;
  const { state, dispatch } = useContext(Context);

  return (
    <div key={id} className="row ad-box">
      <div className="col-12 col-lg-4">
        {premium ? <div className="top">TOP</div> : ""}
        <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
          <a>
            <img
              className="w-100"
              src={`${state.url}${defaultPhoto.photo}`}
              alt="bme f10"
            />
          </a>
        </Link>
      </div>
      <div className="col-12 col-lg-8">
        <div className="row ad-titles">
          <div className="col-8">
            <Link href={`/inzerat/[id]`} as={`/inzerat/${id}`}>
              <a>
                {props.ad.brand && props.ad.brand.value}{" "}
                {props.ad.model && props.ad.model.value}
              </a>
            </Link>
          </div>
          <div className="col-4 text-right">{price} €</div>
        </div>
        <div className="row ad-contents">
          <div className="col-12">
            <div className="row">
              <div className="col-6 col-md-4">
                <span>Rok výroby:</span> {year_of_manufacture}
              </div>
              <div className="col-6 col-md-4">
                <span>Palivo:</span> {decodeFuel(fuel)}
              </div>
              <div className="col-6 col-md-4">
                <span>Prevodovka:</span> {decodeTransmision(transmision)}
              </div>
              <div className="col-6 col-md-4">
                <span>Výkon:</span> {power} kW
              </div>
              <div className="col-6 col-md-4">
                <span>Počet km:</span> {mileage} km
              </div>
              <div className="col-6 col-md-4">
                <span>Farba:</span> {decodeColor(color)}
              </div>
              <div className="col-6 col-md-4">
                <span>Kubatúra:</span> {cubage}
              </div>
              <div className="col-6 col-md-4">
                <span>Počet dverí:</span> {number_of_doors}
              </div>
              <div className="col-6 col-md-4">
                <span>karoséria:</span> {decodeCoupe(coupe)}
              </div>
            </div>
          </div>
        </div>
        <div className="row ad-footers">
          <div className="col-6"></div>
          <div className="col-6 text-right">
            {state.favoriteAds.find(ad => ad.id === id) ? (
              <i
                aria-hidden
                className="fas fa-star add-to-favorites-button"
              ></i>
            ) : (
              <i
                onClick={() =>
                  dispatch({ type: "ADD_TO_FAVORITES", ad: props.ad })
                }
                aria-hidden
                className="far fa-star add-to-favorites-button"
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
