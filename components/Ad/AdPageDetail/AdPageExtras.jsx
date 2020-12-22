import React from 'react';

export const AdPageExtras = (props) => {
  const { extras } = props;
  const { safety, comfort, protection, interier, exterier } = extras;
  return (
    <>
      {safety && safety.length > 0 && (
        <div className="col-12 col-md-6 col-lg-3">
          <h6>Bezpečnosť</h6>
          <ul>
            {safety.map((item, key) => (
              <li key={key}>{item.extra}</li>
            ))}
          </ul>
        </div>
      )}
      {comfort && comfort.length > 0 && (
        <div className="col-12 col-md-6 col-lg-3">
          <h6>Komfort</h6>
          <ul>
            {comfort.map((item, key) => (
              <li key={key}>{item.extra}</li>
            ))}
          </ul>
        </div>
      )}
      {protection && protection.length > 0 && (
        <div className="col-12 col-md-6 col-lg-3">
          <h6>Ochrana</h6>
          <ul>
            {protection.map((item, key) => (
              <li key={key}>{item.extra}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="col-12 col-md-6 col-lg-3">
        {exterier && exterier.length > 0 && (
          <>
            <h6>Exterier</h6>
            <ul>
              {exterier.map((item, key) => (
                <li key={key}>{item.extra}</li>
              ))}
            </ul>
          </>
        )}

        {interier && interier.length > 0 && (
          <>
            {' '}
            <h6>Interier</h6>
            <ul>
              {interier.map((item, key) => (
                <li key={key}>{item.extra}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};
