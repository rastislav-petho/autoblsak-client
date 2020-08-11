import React, { useContext, Fragment, memo } from "react";
import { Context } from "./../context/context";
import { decodeFuel } from "../helpers";

export const FavoritesItem = memo(props => {
  const {
    id,
    year_of_manufacture,
    fuel,
    power,
    mileage,
    price,
    defaultPhoto
  } = props.ad;
  const { state, dispatch } = useContext(Context);

  return (
    <div key={id} className="row mb-2 favorite">
      <div className="col-3 favorites-img-box">
        <img src={`${state.url}/${defaultPhoto.photo}`} alt="bme f10" />
      </div>
      {props.collapse && (
        <Fragment>
          <div className="col-7 favorites-content-box">
            {props.ad.title
              ? props.ad.title
              : props.ad.brand && props.ad.brand.value}{" "}
            {props.ad.model && props.ad.model.value} - {year_of_manufacture}{" "}
            <br />
            {power} kW, {decodeFuel(fuel)} <br />
            {mileage} km, {price} €<br />
          </div>
          <div className="col-2 favorites-remove-box">
            <i
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM_FROM_FAVORITES", id: id })
              }
              aria-hidden
              className="fas fa-times"
            ></i>
          </div>
        </Fragment>
      )}
    </div>
  );
});
