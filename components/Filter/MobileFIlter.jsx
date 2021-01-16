import React from 'react';
import { useFilter } from './../../hooks';
import { FilterForm } from './index';

export const MobileFilter = () => {
  const {
    brands,
    models,
    filter,
    handleChange,
    handleSubmitFilter,
  } = useFilter();

  return (
    <div className="filter-box-mobile">
      <FilterForm
        filter={filter}
        brands={brands}
        models={models}
        handleChange={handleChange}
        handleSubmitFilter={handleSubmitFilter}
        button="button"
      />
    </div>
  );
};
