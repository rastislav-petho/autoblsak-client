import React from "react";

export const Category = props => {
  const { handleClick } = props;
  return (
    <>
      <div className="row text-center">
        <div className="col-12 col-lg-6">
          <a
            href="#"
            onClick={() => handleClick("1", "additional-information")}
          >
            <img src="/img/osobne.png" style={{ width: "100%" }} />
          </a>
        </div>
        <div className="col-12 col-lg-6">
          <a
            href="#"
            onClick={() => handleClick("1", "additional-information")}
          >
            <img src="/img/uzitkove.png" style={{ width: "100%" }} />
          </a>
        </div>
      </div>
      <div className="row text-center mb-5">
        <div className="col-12 col-lg-6">
          <h5>OSOBNÉ VOZIDLÁ</h5>
        </div>
        <div className="col-12 col-lg-6">
          <h5>ÚŽÍTKOVÉ VOZIDLÁ</h5>
          nákladné autá, dodávky, autobusy, mikrobusy, karavany
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12 col-md-6 col-lg-4">
          <a
            href="#"
            onClick={() => handleClick("1", "additional-information")}
          >
            <img src="/img/moto.png" style={{ width: "100%" }} />
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <a
            href="#"
            onClick={() => handleClick("1", "additional-information")}
          >
            <img src="/img/autodiely.png" style={{ width: "100%" }} />
          </a>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <a
            href="#"
            onClick={() => handleClick("1", "additional-information")}
          >
            <img src="/img/ine.png" style={{ width: "100%" }} />
          </a>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12 col-md-6 col-lg-4">
          <h5>MOTO</h5>
          motocykle <br /> skútre a štvorkolky
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <h5>PRÍSLUŠENSTVO</h5>
          náhradné diely, prívesné vozíky, pneumatiky a kolesá, autorádia, gps
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <h5>INÉ</h5>
          veterány <br /> havarované vozidlá
        </div>
      </div>
    </>
  );
};
