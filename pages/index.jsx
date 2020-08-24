import React, { useContext, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Context } from './../context/context';
import { Layout } from './../components';
import { Ad } from './../components/Ad';
import { useApi } from './../hooks';
import Reveal from 'react-reveal/Reveal';

const Index = ({ data }) => {
  const { state } = useContext(Context);
  const ads = state.ads.data;
  const { filter, adPagination } = useApi();

  useEffect(() => {
    filter();
  }, []);

  function handlePagination(move) {
    adPagination(move);
  }

  console.log(state);

  return (
    <Layout pageTitle="Autoblšák.sk" pageDescription="" pageKeywords="">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-3"></div>
        <div className="col-12 col-md-12 col-lg-9">
          <h6 className="mb-3">Počet nájdených výsledkov: {state.ads.total}</h6>
          <Reveal>{ads && ads.map(ad => <Ad ad={ad} key={ad.id} />)}</Reveal>
          <div className="row">
            <div className="col-12">
              <div className="paginate">
                <button onClick={() => handlePagination(false)}>
                  <i aria-hidden className="fas fa-chevron-left"></i>
                </button>{' '}
                <button onClick={() => handlePagination(true)}>
                  <i aria-hidden className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const res = await fetch(`https://autoblsak.sk/api/api/ads`);
  const data = await res.json();
  return {
    data: data
  };
};

export default Index;
