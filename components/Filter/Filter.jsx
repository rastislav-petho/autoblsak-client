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
    dispatch
  } = useFilter();

  return (
    <Fragment>
      <div
        className="filter-box"
        style={collapse ? { width: '300px' } : { width: '50px' }}
        onMouseEnter={() => dispatch({ type: 'TOGGLE_FILTER', toggle: true })}
        onMouseLeave={() => dispatch({ type: 'TOGGLE_FILTER', toggle: false })}
      >
        <div className="filter-buttons">
          {/* <button
            onClick={() =>
              dispatch({ type: "TOGGLE_FILTER", toggle: !collapse })
            }
          >
            {collapse ? (
              <i className="fas fa-chevron-left"></i>
            ) : (
              <i className="fas fa-chevron-right"></i>
            )}
          </button> */}
          <button onClick={handleSubmitFilter}>
            <i aria-hidden className="fas fa-search"></i>
          </button>
        </div>

        {collapse && (
          <Fragment>
            <h3>Filter</h3>
            <FilterForm
              filter={filter}
              brands={brands}
              models={models}
              handleChange={handleChange}
            />
          </Fragment>
        )}
      </div>
      {collapse && (
        <div className="filter-box-mobile">
          <FilterForm
            filter={filter}
            brands={brands}
            models={models}
            handleChange={handleChange}
          />

          <div className="filter-mobile-buttons">
            <button
              onClick={() =>
                dispatch({ type: 'TOGGLE_FILTER', toggle: !collapse })
              }
            >
              <i aria-hidden className="fas fa-chevron-up"></i>
            </button>
            <button onClick={handleSubmitFilter}>
              <i aria-hidden className="fas fa-search"></i> Ok
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
