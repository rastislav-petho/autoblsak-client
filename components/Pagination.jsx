import React from 'react';

export const Pagination = (props) => {
  const { handlePagination, currentPage, lastPage } = props;
  return (
    <div className="col-12">
      <div className="row paginate">
        <div className="col-6">
          {currentPage !== 1 && (
            <button onClick={() => handlePagination(false)}>
              <i aria-hidden className="fas fa-chevron-left"></i> Späť
            </button>
          )}
        </div>
        <div className="col-6 text-right">
          {currentPage !== lastPage && (
            <button onClick={() => handlePagination(true)}>
              Ďalej <i aria-hidden className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
