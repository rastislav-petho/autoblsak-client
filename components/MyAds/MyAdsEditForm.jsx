import React from 'react';
import {
  FUEL,
  COUPE,
  TRANSMISION,
  COLORS,
  NUMBER_OF_DOORS
} from './../../helpers/constants';
import {
  getYearsList,
  decodeBrand,
  decodeModel,
  decodeCoupe,
  decodeFuel,
  decodeTransmision,
  decodeColor
} from './../../helpers';
import { Input, InputWithAppend, Select, Checkbox, Textarea } from './../Form';

export const MyAdsEditForm = props => {
  const {
    postAdState,
    brands,
    models,
    extras,
    handleChange,
    register,
    handleSubmit,
    errors,
    handleExtrasChange,
    onSubmit
  } = props;

  console.log(postAdState);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12 col-lg-6">
          {postAdState.title && (
            <Input
              label="Názov"
              name="title"
              type="text"
              onChange={handleChange}
              value={postAdState.title}
              validation={register({ required: true })}
              errors={errors}
            />
          )}

          {postAdState.brand && (
            <Select
              name="brand"
              label="Značka"
              validation={register({ required: true })}
              value={postAdState.brand}
              options={brands}
              onChange={handleChange}
              errors={errors}
              decode={decodeBrand(brands, postAdState.brand)}
            />
          )}

          {postAdState.model && (
            <Select
              name="model"
              label="Model"
              validation={register({ required: true })}
              value={postAdState.model}
              options={models}
              onChange={handleChange}
              errors={errors}
              decode={decodeModel(models, postAdState.model)}
            />
          )}

          {postAdState.coupe && (
            <Select
              name="coupe"
              label="Karoséria"
              validation={register({ required: true })}
              value={postAdState.coupe}
              options={COUPE}
              onChange={handleChange}
              errors={errors}
              decode={decodeCoupe(postAdState.coupe)}
            />
          )}

          {postAdState.fuel && (
            <Select
              name="fuel"
              label="Palivo"
              validation={register({ required: true })}
              value={postAdState.fuel}
              options={FUEL}
              onChange={handleChange}
              errors={errors}
              decode={decodeFuel(postAdState.fuel)}
            />
          )}

          {postAdState.transmision && (
            <Select
              name="transmision"
              label="Prevodovka"
              validation={register({ required: true })}
              value={postAdState.transmision}
              options={TRANSMISION}
              onChange={handleChange}
              errors={errors}
              decode={decodeTransmision(postAdState.transmision)}
            />
          )}

          {postAdState.color && (
            <Select
              name="color"
              label="Farba"
              validation={register({ required: true })}
              value={postAdState.color}
              options={COLORS}
              onChange={handleChange}
              errors={errors}
              decode={decodeColor(postAdState.color)}
            />
          )}
        </div>
        <div className="col-12 col-lg-6">
          {postAdState.power && (
            <InputWithAppend
              name="power"
              label="Výkon"
              type="number"
              append="kW"
              onChange={handleChange}
              value={postAdState.power}
              validation={register({ required: true })}
              errors={errors}
            />
          )}

          {postAdState.mileage && (
            <InputWithAppend
              name="mileage"
              label="Počet km"
              type="number"
              append="Km"
              onChange={handleChange}
              value={postAdState.mileage}
              validation={register({ required: true })}
              errors={errors}
            />
          )}

          {postAdState.cubage && (
            <InputWithAppend
              name="cubage"
              label="Kubatúra"
              type="number"
              append="cm&sup3;"
              onChange={handleChange}
              value={postAdState.cubage}
              validation={register({ required: true })}
              errors={errors}
            />
          )}

          {postAdState.year_of_manufacture && (
            <Select
              name="year_of_manufacture"
              label="Rok výroby"
              validation={register({ required: true })}
              value={postAdState.year_of_manufacture}
              options={getYearsList('1950', new Date().getFullYear())}
              onChange={handleChange}
              errors={errors}
            />
          )}

          {postAdState.number_of_doors && (
            <Select
              name="number_of_doors"
              label="Počet dverí"
              validation={register({ required: true })}
              value={postAdState.number_of_doors}
              options={NUMBER_OF_DOORS}
              onChange={handleChange}
              errors={errors}
            />
          )}

          {postAdState.price && (
            <InputWithAppend
              label="Cena"
              name="price"
              type="number"
              append="€"
              onChange={handleChange}
              value={postAdState.price}
              validation={register({ required: true })}
              errors={errors}
            />
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-6 col-lg-3">
          <h6>Bezpečnosť</h6>

          {extras.map(
            (item, key) =>
              item.category_id === '1' && (
                <Checkbox
                  name={item.id}
                  key={key}
                  checked={postAdState.adExtras.find(extra => extra == item.id)}
                  onChange={handleExtrasChange}
                  value={item.value}
                />
              )
          )}
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h6>Komfort</h6>

          {extras.map(
            (item, key) =>
              item.category_id === '2' && (
                <Checkbox
                  name={item.id}
                  key={key}
                  checked={postAdState.adExtras.find(extra => extra == item.id)}
                  onChange={handleExtrasChange}
                  value={item.value}
                />
              )
          )}
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h6>Ochrana</h6>

          {extras.map(
            (item, key) =>
              item.category_id === '5' && (
                <Checkbox
                  name={item.id}
                  key={key}
                  checked={postAdState.adExtras.find(extra => extra == item.id)}
                  onChange={handleExtrasChange}
                  value={item.value}
                />
              )
          )}
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <h6>Exterier</h6>

          {extras.map(
            (item, key) =>
              item.category_id === '3' && (
                <Checkbox
                  name={item.id}
                  key={key}
                  checked={postAdState.adExtras.find(extra => extra == item.id)}
                  onChange={handleExtrasChange}
                  value={item.value}
                />
              )
          )}

          <h6 className="mt-3">Interier</h6>

          {extras.map(
            (item, key) =>
              item.category_id === '6' && (
                <Checkbox
                  name={item.id}
                  key={key}
                  checked={postAdState.adExtras.find(extra => extra == item.id)}
                  onChange={handleExtrasChange}
                  value={item.value}
                />
              )
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-lg-6">
          <Textarea
            name="additional_information"
            label="Ďalšie informácie"
            rows="12"
            onChange={handleChange}
            value={postAdState.additional_information}
          />
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12 col-md-6">
              <Input
                label="Vaše meno"
                name="seller_name"
                type="text"
                onChange={handleChange}
                value={postAdState.seller_name}
                validation={register({ required: true })}
                errors={errors}
              />
            </div>
            <div className="col-12 col-md-6">
              <Input
                label="Číslo mobilného telefónu"
                name="mobile_number"
                type="number"
                onChange={handleChange}
                value={postAdState.mobile_number}
                validation={register({ required: true })}
                errors={errors}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Input
                label="Vaša emailová adresa"
                name="email"
                type="email"
                onChange={handleChange}
                value={postAdState.email}
                validation={register({ required: true })}
                errors={errors}
              />
            </div>

            <div className="col-12">
              <Input
                label="Vaša poloha"
                name="location"
                type="text"
                onChange={handleChange}
                value={postAdState.location}
                validation={register({ required: true })}
                errors={errors}
              />
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
