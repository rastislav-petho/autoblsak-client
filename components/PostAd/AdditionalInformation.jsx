import React from "react";
import {
  FUEL,
  COUPE,
  TRANSMISION,
  COLORS,
  NUMBER_OF_DOORS,
  COMMERCIAL_CATEGORY,
  MOTO_CATEGORY,
  ACCESSORIES_CATEGORY,
  OTHER_CATEGORY
} from "./../../helpers/constants";
import {
  getYearsList,
  decodeBrand,
  decodeModel,
  decodeCoupe,
  decodeFuel,
  decodeTransmision,
  decodeColor,
  decodeCategory
} from "./../../helpers";

export const AdditionalInformation = props => {
  const {
    handleSubmit,
    onSubmit,
    brands,
    models,
    extras,
    handleChange,
    handleExtrasChange,
    register,
    errors,
    postAdState
  } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12 col-lg-6">
          {postAdState.categoryType === "personal" ? (
            <>
              <div className="form-group">
                <label htmlFor="brand">Zvoľte značku</label>
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="brand"
                  id="brand"
                  ref={register({ required: true })}
                >
                  {postAdState.brand ? (
                    <option value={postAdState.brand}>
                      {decodeBrand(brands, postAdState.brand)}
                    </option>
                  ) : (
                    <option></option>
                  )}
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id}>
                      {brand.value}
                    </option>
                  ))}
                </select>
                {errors.brand && errors.brand.type === "required" && (
                  <i className="text-danger">Značka je povinný údaj.</i>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="model">Zvoľte model</label>
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="model"
                  id="model"
                  ref={register({ required: true })}
                >
                  {postAdState.model ? (
                    <option value={postAdState.model}>
                      {decodeModel(models, postAdState.model)}
                    </option>
                  ) : (
                    <option></option>
                  )}
                  {models.map(model => (
                    <option key={model.id} value={model.id}>
                      {model.value}
                    </option>
                  ))}
                </select>
                {errors.model && errors.model.type === "required" && (
                  <i className="text-danger">Model je povinný údaj.</i>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="coupe">Karoséria</label>
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="coupe"
                  id="coupe"
                  ref={register({ required: true })}
                >
                  {postAdState.coupe ? (
                    <option value={postAdState.coupe}>
                      {decodeCoupe(postAdState.coupe)}
                    </option>
                  ) : (
                    <option></option>
                  )}
                  {COUPE.map(item => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {errors.coupe && errors.coupe.type === "required" && (
                  <i className="text-danger">Karoséria je povinný údaj.</i>
                )}
              </div>
            </>
          ) : (
            <div className="form-group">
              <label htmlFor="title">Názov</label>

              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={handleChange}
                value={postAdState.title}
                ref={register({ required: true })}
              />

              {errors.title && errors.title.type === "required" && (
                <i className="text-danger">Názov je povinný údaj.</i>
              )}
            </div>
          )}

          {postAdState.categoryType !== "personal" && (
            <div className="form-group">
              <label htmlFor="category">Kategória</label>
              <select
                onChange={handleChange}
                className="form-control"
                name="category"
                id="category"
                ref={register({ required: true })}
              >
                {postAdState.category ? (
                  <option value={postAdState.category}>
                    {decodeCategory(postAdState.category)}
                  </option>
                ) : (
                  <option></option>
                )}
                {postAdState.categoryType === "commercial"
                  ? COMMERCIAL_CATEGORY.map(item => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))
                  : postAdState.categoryType === "moto"
                  ? MOTO_CATEGORY.map(item => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))
                  : postAdState.categoryType === "accessories"
                  ? ACCESSORIES_CATEGORY.map(item => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))
                  : OTHER_CATEGORY.map(item => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
              </select>
              {errors.category && errors.category.type === "required" && (
                <i className="text-danger">Kategŕia je povinný údaj.</i>
              )}
            </div>
          )}

          {postAdState.categoryType === "personal" ||
          postAdState.categoryType === "commercial" ? (
            <>
              <div className="form-group">
                <label htmlFor="fuel">Palivo</label>
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="fuel"
                  id="fuel"
                  ref={register({ required: true })}
                >
                  {postAdState.fuel ? (
                    <option value={postAdState.fuel}>
                      {decodeFuel(postAdState.fuel)}
                    </option>
                  ) : (
                    <option></option>
                  )}
                  {FUEL.map(item => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {errors.fuel && errors.fuel.type === "required" && (
                  <i className="text-danger">Palivo je povinný údaj.</i>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="transmision">Prevodovka</label>
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="transmision"
                  id="transmision"
                  ref={register({ required: true })}
                >
                  {postAdState.transmision ? (
                    <option value={postAdState.transmision}>
                      {decodeTransmision(postAdState.transmision)}
                    </option>
                  ) : (
                    <option></option>
                  )}
                  {TRANSMISION.map(item => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {errors.transmision &&
                  errors.transmision.type === "required" && (
                    <i className="text-danger">Prevodovka je povinný údaj.</i>
                  )}
              </div>
            </>
          ) : null}

          {postAdState.categoryType === "personal" ||
          postAdState.categoryType === "commercial" ||
          postAdState.categoryType === "moto" ? (
            <div className="form-group">
              <label htmlFor="color">Farba</label>
              <select
                onChange={handleChange}
                className="form-control"
                name="color"
                id="color"
                ref={register({ required: true })}
              >
                {postAdState.color ? (
                  <option value={postAdState.color}>
                    {decodeColor(postAdState.color)}
                  </option>
                ) : (
                  <option></option>
                )}
                {COLORS.map(item => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              {errors.color && errors.color.type === "required" && (
                <i className="text-danger">Farba je povinný údaj.</i>
              )}
            </div>
          ) : null}
        </div>
        <div className="col-12 col-lg-6">
          {postAdState.categoryType === "personal" ||
          postAdState.categoryType === "commercial" ||
          postAdState.categoryType === "moto" ? (
            <>
              <div className="form-group">
                <label htmlFor="power">Výkon</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="power"
                    name="power"
                    onChange={handleChange}
                    value={postAdState.power}
                    ref={register({ required: true })}
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">kW</span>
                  </div>
                </div>
                {errors.power && errors.power.type === "required" && (
                  <i className="text-danger">Výkon je povinný údaj.</i>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="mileage">Počet km</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="mileage"
                    name="mileage"
                    onChange={handleChange}
                    value={postAdState.mileage}
                    ref={register({ required: true })}
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">Km</span>
                  </div>
                </div>
                {errors.mileage && errors.mileage.type === "required" && (
                  <i className="text-danger">Počet km je povinný údaj.</i>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="cubage">Kubatúra</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    id="cubage"
                    name="cubage"
                    onChange={handleChange}
                    value={postAdState.cubage}
                    ref={register({ required: true })}
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">cm&sup3;</span>
                  </div>
                </div>
                {errors.cubage && errors.cubage.type === "required" && (
                  <i className="text-danger">Kubatúra je povinný údaj.</i>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="year_of_manufacture">Rok výroby</label>
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="year_of_manufacture"
                  id="year_of_manufacture"
                  ref={register({ required: true })}
                >
                  {postAdState.year_of_manufacture ? (
                    <option value={postAdState.year_of_manufacture}>
                      {postAdState.year_of_manufacture}
                    </option>
                  ) : (
                    <option></option>
                  )}
                  {getYearsList("1950", new Date().getFullYear()).map(year => (
                    <option key={year.value} value={year.value}>
                      {year.label}
                    </option>
                  ))}
                </select>
                {errors.year_of_manufacture &&
                  errors.year_of_manufacture.type === "required" && (
                    <i className="text-danger">Rok výroby je povinný údaj.</i>
                  )}
              </div>
            </>
          ) : null}

          {postAdState.categoryType === "personal" && (
            <div className="form-group">
              <label htmlFor="number_of_doors">Počet dverí</label>
              <select
                onChange={handleChange}
                className="form-control"
                name="number_of_doors"
                id="number_of_doors"
                ref={register({ required: true })}
              >
                {postAdState.number_of_doors ? (
                  <option value={postAdState.number_of_doors}>
                    {postAdState.number_of_doors}
                  </option>
                ) : (
                  <option></option>
                )}
                {NUMBER_OF_DOORS.map(item => (
                  <option value={item.value}>{item.label}</option>
                ))}
              </select>
              {errors.number_of_doors &&
                errors.number_of_doors.type === "required" && (
                  <i className="text-danger">Počet dverí je povinný údaj.</i>
                )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="price">Cena</label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                onChange={handleChange}
                value={postAdState.price}
                ref={register({ required: true })}
              />
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  €
                </span>
              </div>
            </div>
            {errors.price && errors.price.type === "required" && (
              <i className="text-danger">Cena je povinný údaj.</i>
            )}
          </div>
        </div>
      </div>
      {postAdState.categoryType === "personal" && (
        <div className="row mt-3">
          <div className="col-12 col-md-6 col-lg-3">
            <h6>Bezpečnosť</h6>

            {extras.map(
              (item, key) =>
                item.category_id === "1" && (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={item.id}
                      id={key}
                      key={key}
                      checked={postAdState.adExtras.find(
                        extra => extra == item.id
                      )}
                      onChange={handleExtrasChange}
                    />
                    <label className="form-check-label" htmlFor={key}>
                      {item.value}
                    </label>
                  </div>
                )
            )}
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6>Komfort</h6>

            {extras.map(
              (item, key) =>
                item.category_id === "2" && (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={item.id}
                      id={key}
                      key={key}
                      checked={postAdState.adExtras.find(
                        extra => extra == item.id
                      )}
                      onChange={handleExtrasChange}
                    />
                    <label className="form-check-label" htmlFor={key}>
                      {item.value}
                    </label>
                  </div>
                )
            )}
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6>Ochrana</h6>

            {extras.map(
              (item, key) =>
                item.category_id === "5" && (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={item.id}
                      id={key}
                      key={key}
                      checked={postAdState.adExtras.find(
                        extra => extra == item.id
                      )}
                      onChange={handleExtrasChange}
                    />
                    <label className="form-check-label" htmlFor={key}>
                      {item.value}
                    </label>
                  </div>
                )
            )}
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h6>Exterier</h6>

            {extras.map(
              (item, key) =>
                item.category_id === "3" && (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={item.id}
                      id={key}
                      key={key}
                      checked={postAdState.adExtras.find(
                        extra => extra == item.id
                      )}
                      onChange={handleExtrasChange}
                    />
                    <label className="form-check-label" htmlFor={key}>
                      {item.value}
                    </label>
                  </div>
                )
            )}

            <h6 className="mt-3">Interier</h6>

            {extras.map(
              (item, key) =>
                item.category_id === "6" && (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={item.id}
                      id={key}
                      key={key}
                      checked={postAdState.adExtras.find(
                        extra => extra == item.id
                      )}
                      onChange={handleExtrasChange}
                    />
                    <label className="form-check-label" htmlFor={key}>
                      {item.value}
                    </label>
                  </div>
                )
            )}
          </div>
        </div>
      )}
      <div className="row mt-3">
        <div className="col-12 col-lg-6">
          <div className="form-group">
            <label htmlFor="additional_information">Ďalšie informácie</label>
            <textarea
              className="form-control"
              id="additional_information"
              name="additional_information"
              rows="12"
              onChange={handleChange}
              value={postAdState.additional_information}
            ></textarea>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="form-group col-12 col-md-6">
              <label htmlFor="seller_name">Vaše meno</label>
              <input
                type="text"
                className="form-control"
                id="seller_name"
                name="seller_name"
                onChange={handleChange}
                value={postAdState.seller_name}
                ref={register({ required: true })}
              />
              {errors.seller_name && errors.seller_name.type === "required" && (
                <i className="text-danger">Vaše meno je povinný údaj.</i>
              )}
            </div>
            <div className="form-group col-12 col-md-6">
              <label htmlFor="mobile_number">Číslo mobilného telefónu</label>
              <input
                type="number"
                className="form-control"
                id="mobile_number"
                name="mobile_number"
                onChange={handleChange}
                value={postAdState.mobile_number}
                ref={register({ required: true })}
              />
              {errors.mobile_number &&
                errors.mobile_number.type === "required" && (
                  <i className="text-danger">
                    Vaše tel. číslo je povinný údaj.
                  </i>
                )}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="email">Vaša emailová adresa</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={postAdState.email}
                onChange={handleChange}
                ref={register({ required: true })}
              />
              {errors.email && errors.email.type === "required" && (
                <i className="text-danger">Váš email je povinný údaj.</i>
              )}
            </div>

            <div className="form-group col-12">
              <label htmlFor="location">Vaša poloha</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                onChange={handleChange}
                value={postAdState.location}
                ref={register({ required: true })}
              />
              {errors.location && errors.location.type === "required" && (
                <i className="text-danger">Vaša poloha je povinný údaj.</i>
              )}
            </div>

            <div className="form-group col-12">
              <input type="submit" className="button w-100" name="submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
