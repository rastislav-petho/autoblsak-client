import React, { Fragment } from 'react';
import { FilterForm } from './index';
import { useFilter } from './../../hooks';

export const Filter = () => {
  const {
    collapse,
    brands,
    models,
    filter,
    handleChange,
    handleSubmitFilter,
    dispatch,
  } = useFilter();

  return (
    <Fragment>
      <div className="filter-box">
        <Fragment>
          <h5>
            <i aria-hidden className="fas fa-search"></i> Vyhľadávanie
          </h5>
          <FilterForm
            filter={filter}
            brands={brands}
            models={models}
            handleChange={handleChange}
            handleSubmitFilter={handleSubmitFilter}
            button="full-button"
          />
        </Fragment>
      </div>

      {collapse && (
        <div className="filter-box-mobile">
          <FilterForm
            filter={filter}
            brands={brands}
            models={models}
            handleChange={handleChange}
            button="button"
          />
        </div>
      )}
    </Fragment>
  );
};
