import React, { Fragment } from 'react';
import { FilterForm } from './index';
import { useFilter } from './../../hooks';
import { Search } from '../Icons';

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
            <Search /> Vyhľadávanie
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
    </Fragment>
  );
};
