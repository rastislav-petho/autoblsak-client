import React, { useContext } from 'react';
import { Context } from './../context/context';
import { decodeFuel } from './../helpers';

export const Ad = (props) => {

    const {id, year_of_manufacture, fuel, power, mileage, price, defaultPhoto, transmision, cubage } = props.ad;
    const { state, dispatch } = useContext(Context);

    return (
        <div key={id} className="row ad-box">
            <div className="col-12 col-lg-4">
                <img className="w-100" src={`${state.url}${defaultPhoto.photo}`} alt="bme f10" /> 
            </div>
            <div className="col-12 col-lg-8">
                <div className="row ad-titles">
                    <div className="col-6">
                        {props.ad.brand && props.ad.brand.value} {props.ad.model && props.ad.model.value}
                        </div>
                    <div className="col-6 text-right">
                        {price} EUR
                        </div>
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
                                <span>Prevodovka:</span> {transmision}
                            </div>
                            <div className="col-6 col-md-4">
                                <span>Výkon:</span> {power} kW
                            </div>
                            <div className="col-6 col-md-4">
                                <span>Počet km:</span> {mileage} km
                            </div>
                            <div className="col-6 col-md-4">
                                <span>Farba:</span> {mileage} km
                            </div>
                            <div className="col-6 col-md-4">
                                <span>Kubatúra:</span> {cubage}
                            </div>
                            <div className="col-6 col-md-4">
                                <span>Počet dverí:</span> {mileage} km
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ad-footers">
                    <div className="col-6">

                    </div>
                    <div className="col-6 text-right">
                        <button onClick={() => dispatch({ type: 'ADD_TO_FAVORITES', ad: props.ad })}>pridat do oblubenych</button>
                    </div>
                </div>
            </div>
        </div>
    )
}