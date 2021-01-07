import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context';
import { useRouter } from 'next/router';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import { Layout, Loading } from '../../components';
import {
  AdGallery,
  AdPageHeader,
  AdPageAction,
  AdPageInformation,
  AdPageAdditionalInformation,
  AdPageExtras,
} from '../../components/Ad';
import { getAdTitle } from '../../helpers';
import { isPaidCategory } from './../../helpers/constants';

const Inzerat = ({ data }) => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const [sortedExtras, setSortedExtars] = useState({});
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
    email,
  } = data;

  let safety = [];
  let comfort = [];
  let protection = [];
  let exterier = [];
  let interier = [];

  useEffect(() => {
    if (state.user != undefined && state.user.id == data.uid) {
      return;
    } else if (data.status == 0) {
      router.push('/');
    } else if (isPaidCategory.includes(data.category) && data.paid != 1) {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    const data = { id: id, views: views + 1 };
    axios.post(`${state.api}/inzerat/updateviews`, data).then((response) => {
      return;
    });
  }, []);

  useEffect(() => {
    data.extras.map((item) => {
      if (item.extra_category_id == 1) {
        safety.push(item);
      }

      if (item.extra_category_id == 2) {
        comfort.push(item);
      }

      if (item.extra_category_id == 5) {
        protection.push(item);
      }

      if (item.extra_category_id == 3) {
        exterier.push(item);
      }

      if (item.extra_category_id == 6) {
        interier.push(item);
      }
    });

    setSortedExtars({
      safety: safety,
      comfort: comfort,
      protection: protection,
      interier: interier,
      exterier: exterier,
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
            <AdPageExtras extras={sortedExtras} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.apiUrl}/inzerat/${params.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Inzerat;
