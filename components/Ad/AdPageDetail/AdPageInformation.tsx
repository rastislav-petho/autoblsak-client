import React, { FC } from 'react';
import {
  decodeFuel,
  decodeCoupe,
  decodeTransmision,
  decodeColor,
} from '../../../helpers';
import NumberFormat from 'react-number-format';

type AdPageInformationProps = {
  fuel: number;
  coupe: number;
  transmision: number;
  power: number;
  cubage: number;
  year_of_manufacture: string;
  mileage: number;
  number_of_doors: string;
  color: number;
};

export const AdPageInformation: FC<AdPageInformationProps> = (props) => {
  const {
    fuel,
    coupe,
    transmision,
    power,
    cubage,
    year_of_manufacture,
    mileage,
    number_of_doors,
    color,
  } = props;
  return (
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
                <NumberFormat
                  value={mileage}
                  displayType="text"
                  thousandSeparator=" "
                  suffix=" km"
                  renderText={(value) => <td>{value}</td>}
                />
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
  );
};
