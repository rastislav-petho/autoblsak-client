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
          <h3>Filter</h3>
          <FilterForm
            filter={filter}
            brands={brands}
            models={models}
            handleChange={handleChange}
            handleSubmitFilter={handleSubmitFilter}
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
          />
        </div>
      )}
    </Fragment>
  );
};
