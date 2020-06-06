import React, { useContext, useEffect, useState, Fragment } from "react";
import { Context } from "./../context/context";
import {
  decodeBrand,
  decodeModel,
  decodeFuel,
  decodeCoupe,
  decodeTransmision,
  decodeColor
} from "./../helpers";
import { FUEL, COUPE, TRANSMISION, COLORS } from "./../helpers/constants";

export const Filter = () => {
  const { state, dispatch } = useContext(Context);
  const collapse = state.config.toggleFilter;
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [filter, setFilter] = useState({
    brand: "",
    model: "",
    fuel: "",
    transmision: "",
    color: "",
    yearFrom: "",
    yearTo: "",
    priceFrom: "",
    priceTo: "",
    kmFrom: "",
    kmTo: "",
    powerFrom: "",
    powerTo: ""
  });

  console.log("filter", filter);

  useEffect(() => {
    fetch(`${state.api}/filter/brands`)
      .then(res => res.json())
      .then(json => {
        setBrands(json);
      });
  }, []);

  useEffect(() => {
    if (filter.brand !== "") {
      fetch(`${state.api}/filter/models/${filter.brand}`)
        .then(res => res.json())
        .then(json => {
          setModels(json);
        });
    }
  }, [filter.brand]);

  function handleChange(event) {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value
    });
  }

  return (
    <Fragment>
      <div
        className="filter-box"
        style={collapse ? { width: "300px" } : { width: "50px" }}
      >
        <div className="filter-buttons">
          <button
            onClick={() =>
              dispatch({ type: "TOGGLE_FILTER", toggle: !collapse })
            }
          >
            {collapse ? (
              <i className="fas fa-chevron-left"></i>
            ) : (
              <i className="fas fa-chevron-right"></i>
            )}
          </button>
          <button>
            <i aria-hidden className="fas fa-search"></i>
          </button>
        </div>

        {collapse && (
          <Fragment>
            <h3>Filter</h3>
            <form>
              <div className="form-group">
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="brand"
                >
                  <option value={filter.brand ? filter.brand : null}>
                    {filter.brand
                      ? decodeBrand(brands, filter.brand)
                      : "Zvoľte značku"}
                  </option>
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id}>
                      {brand.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="model"
                >
                  <option value={filter.model ? filter.model : null}>
                    {filter.model
                      ? decodeModel(models, filter.model)
                      : "Zvoľte model"}
                  </option>
                  {models.map(model => (
                    <option key={model.id} value={model.id}>
                      {model.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="coupe"
                >
                  <option value={filter.coupe ? filter.coupe : null}>
                    {filter.coupe ? decodeCoupe(filter.coupe) : "Karoséria"}
                  </option>
                  {COUPE.map(item => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="fuel"
                >
                  <option value={filter.fuel ? filter.fuel : null}>
                    {filter.fuel ? decodeFuel(filter.fuel) : "Palivo"}
                  </option>
                  {FUEL.map(item => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="transmision"
                >
                  <option
                    value={filter.transmision ? filter.transmision : null}
                  >
                    {filter.transmision
                      ? decodeTransmision(filter.transmision)
                      : "Prevodovka"}
                  </option>
                  {TRANSMISION.map(trans => (
                    <option key={trans.value} value={trans.value}>
                      {trans.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="color"
                >
                  <option value={filter.color ? filter.color : null}>
                    {filter.color ? decodeColor(filter.color) : "Farba"}
                  </option>
                  {COLORS.map(color => (
                    <option value={color.value}>{color.label}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Rok výroby</label>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input
                      onChange={handleChange}
                      name="yearFrom"
                      className="form-control"
                      placeholder="Od"
                      value={filter.yearFrom}
                    ></input>
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      onChange={handleChange}
                      name="yearTo"
                      className="form-control"
                      placeholder="Do"
                      value={filter.yearTo}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Cena</label>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input
                      onChange={handleChange}
                      name="priceFrom"
                      className="form-control"
                      placeholder="Od"
                      value={filter.priceFrom}
                    ></input>
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      onChange={handleChange}
                      name="priceTo"
                      className="form-control"
                      placeholder="Do"
                      value={filter.priceTo}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Najazdených km</label>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input
                      onChange={handleChange}
                      name="kmFrom"
                      className="form-control"
                      placeholder="Od"
                      value={filter.kmFrom}
                    ></input>
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      onChange={handleChange}
                      name="kmTo"
                      className="form-control"
                      placeholder="Do"
                      value={filter.kmTo}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Výkon</label>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <input
                      onChange={handleChange}
                      name="powerFrom"
                      className="form-control"
                      placeholder="Od"
                      value={filter.powerFrom}
                    ></input>
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      onChange={handleChange}
                      name="powerTo"
                      className="form-control"
                      placeholder="Do"
                      value={filter.powerTo}
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </Fragment>
        )}
      </div>
      {collapse && (
        <div className="filter-box-mobile">
          <h3>Filter</h3>
          <form className="form">
            <div className="form-group">
              <select className="form-control" name="brand">
                <option>Zvoľte značku</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control" name="model">
                <option>Zvoľte model</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control" name="coupe">
                <option>Karoséria</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control" name="fuel">
                <option>Palivo</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control" name="transmision">
                <option>Prevodovka</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control" name="color">
                <option>Farba</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="brand"
                className="form-control"
                id="brand"
                placeholder="Zvoľte značku"
              />
            </div>
            <div className="form-group">
              <input
                type="model"
                className="form-control"
                id="model"
                placeholder="Zvoľte model"
              />
            </div>

            <div className="form-group">
              <input
                type="brand"
                className="form-control"
                id="brand"
                placeholder="Zvoľte značku"
              />
            </div>
            <div className="form-group">
              <input
                type="model"
                className="form-control"
                id="model"
                placeholder="Zvoľte model"
              />
            </div>

            <div className="form-group">
              <input
                type="brand"
                className="form-control"
                id="brand"
                placeholder="Zvoľte značku"
              />
            </div>
            <div className="form-group">
              <input
                type="model"
                className="form-control"
                id="model"
                placeholder="Zvoľte model"
              />
            </div>
          </form>

          <div className="filter-mobile-buttons">
            <button type="submit">
              <i aria-hidden className="fas fa-search"></i>
            </button>
            <button
              onClick={() =>
                dispatch({ type: "TOGGLE_FILTER", toggle: !collapse })
              }
            >
              <i aria-hidden className="fas fa-chevron-up"></i>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
