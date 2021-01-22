import React from 'react';
import {
  FUEL,
  COUPE,
  TRANSMISION,
  COLORS,
  CATEGORY,
} from '../../helpers/constants';
import {
  decodeBrand,
  decodeModel,
  decodeFuel,
  decodeCoupe,
  decodeTransmision,
  decodeColor,
  getYearsList,
  decodeCategory,
} from '../../helpers';

export const FilterForm = ({
  filter,
  brands,
  models,
  handleChange,
  handleSubmitFilter,
  button,
}) => {
  return (
    <form className="form" onSubmit={handleSubmitFilter}>
      <div className="form-group mb-2">
        <select
          onChange={handleChange}
          className="form-control"
          name="category"
        >
          <option value={filter.category ? filter.category : ''}>
            {filter.category
              ? decodeCategory(filter.category)
              : 'Zvoľte typ inzerátu'}
          </option>
          <option value="">-- Zvoľte typ inzerátu --</option>
          {CATEGORY.map((brand) => (
            <option key={brand.value} value={brand.value}>
              {brand.label}
            </option>
          ))}
        </select>
      </div>
      {filter.category == 1 && (
        <>
          <div className="form-group mb-2">
            <select
              onChange={handleChange}
              className="form-control"
              name="brand"
            >
              <option value={filter.brand ? filter.brand : undefined}>
                {filter.brand
                  ? decodeBrand(brands, filter.brand)
                  : 'Zvoľte značku'}
              </option>
              <option value="">-- Zvoľte značku --</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-2">
            <select
              onChange={handleChange}
              className="form-control"
              name="model"
            >
              <option value={filter.model ? filter.model : null}>
                {filter.model
                  ? decodeModel(models, filter.model)
                  : 'Zvoľte model'}
              </option>
              <option value="">-- Zvoľte model --</option>
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-2">
            <select
              onChange={handleChange}
              className="form-control"
              name="coupe"
            >
              <option value={filter.coupe ? filter.coupe : null}>
                {filter.coupe ? decodeCoupe(filter.coupe) : 'Karoséria'}
              </option>
              <option value="">-- Karoséria --</option>
              {COUPE.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
      <div className="form-group mb-2">
        <select onChange={handleChange} className="form-control" name="fuel">
          <option value={filter.fuel ? filter.fuel : null}>
            {filter.fuel ? decodeFuel(filter.fuel) : 'Palivo'}
          </option>
          <option value="">-- Palivo --</option>
          {FUEL.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mb-2">
        <select
          onChange={handleChange}
          className="form-control"
          name="transmision"
        >
          <option value={filter.transmision ? filter.transmision : null}>
            {filter.transmision
              ? decodeTransmision(filter.transmision)
              : 'Prevodovka'}
          </option>
          <option value="">-- Prevodovka --</option>
          {TRANSMISION.map((trans) => (
            <option key={trans.value} value={trans.value}>
              {trans.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mb-2">
        <select onChange={handleChange} className="form-control" name="color">
          <option value={filter.color ? filter.color : null}>
            {filter.color ? decodeColor(filter.color) : 'Farba'}
          </option>
          <option value="">-- Farba --</option>
          {COLORS.map((color, index) => (
            <option key={index} value={color.value}>
              {color.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group mb-2">
        <label>Rok výroby</label>
        <div className="row">
          <div className="col-6">
            <select
              onChange={handleChange}
              name="yearFrom"
              className="form-control mb-2"
            >
              <option value={filter.yearFrom ? filter.yearFrom : null}>
                {filter.yearFrom ? filter.yearFrom : 'Od'}
              </option>
              <option value="">-- Od --</option>
              {getYearsList('1950', new Date().getFullYear()).map(
                (year, index) => (
                  <option key={index} value={year.value}>
                    {year.label}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="col-6">
            <select
              onChange={handleChange}
              name="yearTo"
              className="form-control mb-2"
            >
              <option value={filter.yearTo ? filter.yearTo : null}>
                {filter.yearTo ? filter.yearTo : 'Do'}
              </option>
              <option value="">-- Do --</option>
              {getYearsList('1950', new Date().getFullYear()).map(
                (year, index) => (
                  <option key={index} value={year.value}>
                    {year.label}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      </div>
      <div className="form-group mb-2">
        <label>Cena</label>
        <div className="row">
          <div className="col-6">
            <input
              type="number"
              onChange={handleChange}
              name="priceFrom"
              className="form-control mb-2"
              placeholder="Od"
              value={filter.priceFrom}
            ></input>
          </div>
          <div className="col-6">
            <input
              type="number"
              onChange={handleChange}
              name="priceTo"
              className="form-control mb-2"
              placeholder="Do"
              value={filter.priceTo}
            ></input>
          </div>
        </div>
      </div>
      <div className="form-group mb-2">
        <label>Najazdených km</label>
        <div className="row">
          <div className="col-6">
            <input
              type="number"
              onChange={handleChange}
              name="kmFrom"
              className="form-control mb-2"
              placeholder="Od"
              value={filter.kmFrom}
            ></input>
          </div>
          <div className="col-6">
            <input
              type="number"
              onChange={handleChange}
              name="kmTo"
              className="form-control mb-2"
              placeholder="Do"
              value={filter.kmTo}
            ></input>
          </div>
        </div>
      </div>
      <div className="form-group mb-2">
        <label>Výkon (kW)</label>
        <div className="row">
          <div className="col-6">
            <input
              type="number"
              onChange={handleChange}
              name="powerFrom"
              className="form-control mb-2"
              placeholder="Od"
              value={filter.powerFrom}
            ></input>
          </div>
          <div className="col-6">
            <input
              type="number"
              onChange={handleChange}
              name="powerTo"
              className="form-control mb-2"
              placeholder="Do"
              value={filter.powerTo}
            ></input>
          </div>
        </div>
      </div>
      <div className="form-group text-center">
        <button type="submit" className={button}>
          Hľadať
        </button>
      </div>
    </form>
  );
};
