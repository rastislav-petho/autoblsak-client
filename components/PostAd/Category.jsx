import React from 'react';

export const Category = (props) => {
  const { handleCategory } = props;
  return (
    <>
      <div className="row text-center">
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12">
              <a
                href="#"
                onClick={() =>
                  handleCategory('personal', 'additional-information')
                }
              >
                <img src="/img/osobne.png" style={{ width: '60%' }} />
              </a>
            </div>
            <div className="col-12">
              <h5>OSOBNÉ VOZIDLÁ</h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12">
              <a
                href="#"
                onClick={() =>
                  handleCategory('commercial', 'additional-information')
                }
              >
                <img src="/img/uzitkove.png" style={{ width: '60%' }} />
              </a>
            </div>
            <div className="col-12">
              <h5>ÚŽÍTKOVÉ VOZIDLÁ</h5>
              nákladné autá, dodávky, autobusy, mikrobusy, karavany
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="row">
            <div className="col-12">
              <a
                href="#"
                onClick={() => handleCategory('moto', 'additional-information')}
              >
                <img src="/img/moto.png" style={{ width: '70%' }} />
              </a>
            </div>
            <div className="col-12">
              <h5>MOTO</h5>
              motocykle <br /> skútre a štvorkolky
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="row">
            <div className="col-12">
              <a
                href="#"
                onClick={() =>
                  handleCategory('accessories', 'additional-information')
                }
              >
                <img src="/img/autodiely.png" style={{ width: '70%' }} />
              </a>
            </div>
            <div className="col-12">
              <h5>PRÍSLUŠENSTVO</h5>
              náhradné diely, prívesné vozíky, pneumatiky a kolesá, autorádia,
              gps
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="row">
            <div className="col-12">
              <a
                href="#"
                onClick={() =>
                  handleCategory('other', 'additional-information')
                }
              >
                <img src="/img/ine.png" style={{ width: '70%' }} />
              </a>
            </div>
            <div className="col-12">
              <h5>INÉ</h5>
              veterány <br /> havarované vozidlá
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
