import React, { FC } from 'react';
import Pagination from 'react-js-pagination';

type PaginationComponentProps = {
  handlePagination: (value: number) => void;
  currentPage: number;
  total: number;
  itemsCountPerPage: number;
};

export const PaginationComponent: FC<PaginationComponentProps> = (props) => {
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
