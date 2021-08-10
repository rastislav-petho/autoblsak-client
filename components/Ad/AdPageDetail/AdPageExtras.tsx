import React, { FC } from 'react';
import { SortedExtrasType } from 'helpers/types';

type AdPageExtrasProps = {
  extras: SortedExtrasType;
};

export const AdPageExtras: FC<AdPageExtrasProps> = (props) => {
  const { extras } = props;
  return (
    <>
      {extras.safety && extras.safety.length > 0 && (
        <div className="col-12 col-md-6 col-lg-3">
          <h6>Bezpečnosť</h6>
          <ul>
            {extras.safety.map((item, key) => (
              <li key={key}>{item.extra}</li>
            ))}
          </ul>
        </div>
      )}
      {extras.comfort && extras.comfort.length > 0 && (
        <div className="col-12 col-md-6 col-lg-3">
          <h6>Komfort</h6>
          <ul>
            {extras.comfort.map((item, key) => (
              <li key={key}>{item.extra}</li>
            ))}
          </ul>
        </div>
      )}
      {extras.protection && extras.protection.length > 0 && (
        <div className="col-12 col-md-6 col-lg-3">
          <h6>Ochrana</h6>
          <ul>
            {extras.protection.map((item, key) => (
              <li key={key}>{item.extra}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="col-12 col-md-6 col-lg-3">
        {extras.exterier && extras.exterier.length > 0 && (
          <>
            <h6>Exterier</h6>
            <ul>
              {extras.exterier.map((item, key) => (
                <li key={key}>{item.extra}</li>
              ))}
            </ul>
          </>
        )}

        {extras.interier && extras.interier.length > 0 && (
          <>
            {' '}
            <h6>Interier</h6>
            <ul>
              {extras.interier.map((item, key) => (
                <li key={key}>{item.extra}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};
