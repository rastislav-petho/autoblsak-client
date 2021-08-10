import React, { FC, Fragment } from 'react';
import { FilterForm } from './index';
import { useFilter } from '../../hooks';
import { Search } from 'components/Icons';

type FilterProps = {};

export const Filter: FC<FilterProps> = () => {
  const {
    brands,
    models,
    filter,
    handleChange,
    handleSubmitFilter,
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
