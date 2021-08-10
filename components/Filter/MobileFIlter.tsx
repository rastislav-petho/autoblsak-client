import { BrandType, Filter, ModelType } from 'helpers/types';
import React, { FC } from 'react';
import { useFilter } from '../../hooks';
import { FilterForm } from './index';

type MobileFilterProps = {};

export const MobileFilter: FC<MobileFilterProps> = () => {
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
