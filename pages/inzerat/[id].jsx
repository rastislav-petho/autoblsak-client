import React, { useContext, useEffect } from 'react';
import { Context } from '../../context/context';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import { Layout } from '../../components';
import {
  AdGallery,
  AdPageHeader,
  AdPageAction,
  AdPageInformation,
  AdPageAdditionalInformation,
  AdPageExtras,
} from '../../components/Ad';
import Reveal from 'react-reveal/Reveal';
import { getAdTitle } from '../../helpers';

const Inzerat = ({ data }) => {
  const { state } = useContext(Context);

  const {
    id,
    title,
    brand_label,
    model_label,
    price,
    created,
    views,
    premium,
    photos,
    fuel,
    coupe,
    transmision,
    power,
    cubage,
    year_of_manufacture,
    mileage,
    number_of_doors,
    color,
    seller_name,
    mobile_number,
    location,
    additional_information,
    extras,
    email,
  } = data;

  useEffect(() => {
    const data = { id: id, views: views + 1 };
    axios.post(`${state.api}/inzerat/updateviews`, data).then((response) => {
      return;
    });
  }, []);

  return (
    <Layout
      pageTitle={`${getAdTitle(
        title,
        brand_label,
        model_label
      )} - Autoblšák.sk`}
      pageDescription={additional_information}
      pageKeywords=""
      image={photos[0].src}
    >
      <Reveal>
        <div className="row inzerat">
          <div className="col-12">
            <AdPageHeader
              title={title}
              brand={brand_label}
              model={model_label}
              id={id}
              created={created}
              views={views}
              premium={premium}
              price={price}
            />
          </div>

          <div className="col-12 col-lg-8 mt-4">
            <div className="row">
              <div className="col-12">
                <div className="gallery-items">
                  <AdGallery photos={photos} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mt-4">
            <AdPageInformation
              fuel={fuel}
              coupe={coupe}
              transmision={transmision}
              power={power}
              cubage={cubage}
              year_of_manufacture={year_of_manufacture}
              mileage={mileage}
              number_of_doors={number_of_doors}
              color={color}
            />
            <AdPageAction
              seller_name={seller_name}
              mobile_number={mobile_number}
              user={state.user}
              email={email}
              location={location}
            />
          </div>
          <div className="col-12 mt-4">
            <div className="row">
              {additional_information && (
                <AdPageAdditionalInformation
                  additional_information={additional_information}
                />
              )}
              {extras.length > 0 && (
                <>
                  <AdPageExtras extras={extras} />
                </>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://autoblsak.sk/api/api/inzerat/${params.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Inzerat;
