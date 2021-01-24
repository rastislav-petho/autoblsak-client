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
                <img
                  src="/img/osobne.png"
                  style={{ width: '60%' }}
                  alt="osobné vozidlá"
                />
              </a>
            </div>
            <div className="col-12">
              <a
                href="#"
                onClick={() =>
                  handleCategory('personal', 'additional-information')
                }
              >
                <h5>OSOBNÉ VOZIDLÁ</h5>
              </a>
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
                <img
                  src="/img/uzitkove.png"
                  style={{ width: '60%' }}
                  alt="Úžitkové vozidlá"
                />
              </a>
            </div>
            <div className="col-12">
              <a
                href="#"
                onClick={() =>
                  handleCategory('commercial', 'additional-information')
                }
              >
                <h5>ÚŽÍTKOVÉ VOZIDLÁ</h5>
              </a>
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
                <img src="/img/moto.png" style={{ width: '70%' }} alt="moto" />
              </a>
            </div>
            <div className="col-12">
              <a
                href="#"
                onClick={() => handleCategory('moto', 'additional-information')}
              >
                <h5>MOTO</h5>
              </a>
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
                <img
                  src="/img/autodiely.png"
                  style={{ width: '70%' }}
                  alt="Príslušenstvo"
                />
              </a>
            </div>
            <div className="col-12">
              <a
                href="#"
                onClick={() =>
                  handleCategory('accessories', 'additional-information')
                }
              >
                <h5>PRÍSLUŠENSTVO</h5>
              </a>
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
                <img src="/img/ine.png" style={{ width: '70%' }} alt="Iné" />
              </a>
            </div>
            <div className="col-12">
              <a
                href="#"
                onClick={() =>
                  handleCategory('other', 'additional-information')
                }
              >
                <h5>INÉ</h5>
              </a>
              veterány <br /> havarované vozidlá
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
