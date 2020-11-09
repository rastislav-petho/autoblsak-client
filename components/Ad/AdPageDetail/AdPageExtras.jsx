import React from 'react';

export const AdPageExtras = (props) => {
  const { extras } = props;
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3">
        <h6>Bezpečnosť</h6>
        <ul>
          {extras.map(
            (item, key) =>
              item.extra_category_id === 1 && <li key={key}>{item.extra}</li>
          )}
        </ul>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <h6>Komfort</h6>
        <ul>
          {extras.map(
            (item, key) =>
              item.extra_category_id === 2 && <li key={key}>{item.extra}</li>
          )}
        </ul>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <h6>Ochrana</h6>
        <ul>
          {extras.map(
            (item, key) =>
              item.extra_category_id === 5 && <li key={key}>{item.extra}</li>
          )}
        </ul>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <h6>Exterier</h6>
        <ul>
          {extras.map(
            (item, key) =>
              item.extra_category_id === 3 && <li key={key}>{item.extra}</li>
          )}
        </ul>

        <h6>Interier</h6>
        <ul>
          {extras.map(
            (item, key) =>
              item.extra_category_id === 6 && <li key={key}>{item.extra}</li>
          )}
        </ul>
      </div>
    </>
  );
};
