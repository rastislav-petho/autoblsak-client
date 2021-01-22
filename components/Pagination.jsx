import React from 'react';
import Pagination from 'react-js-pagination';

export const PaginationComponent = (props) => {
  const { handlePagination, currentPage, total, itemsCountPerPage } = props;

  return (
    <div className="paginate">
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={total}
        pageRangeDisplayed={3}
        onChange={handlePagination}
        hideDisabled={true}
        hideFirstLastPages={false}
        hideNavigation={true}
        activeLinkClass="current-page"
      />
    </div>
  );
};
