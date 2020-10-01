import React, { useContext, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { Context } from './../context/context';
import { Layout, Magazine, MostView, UserPanel } from './../components';
import { Filter } from './../components/Filter';
import { Ad } from './../components/Ad';
import { useApi } from './../hooks';
import Reveal from 'react-reveal/Reveal';

const Index = () => {
  const { state } = useContext(Context);
  const ads = state.ads.data;
  const { filter, adPagination } = useApi();

  useEffect(() => {
    filter();
  }, []);

  function handlePagination(move) {
    adPagination(move);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  console.log(state);
  return (
    <Layout pageTitle="Autoblšák.sk" pageDescription="" pageKeywords="">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-9">
          <h6 className="mb-3">
            Počet nájdených výsledkov: {state.ads.to} z {state.ads.total}
          </h6>
          <Reveal>
            <>{ads && ads.map((ad) => <Ad ad={ad} key={ad.id} />)}</>
          </Reveal>
          <div className="row">
            <div className="col-12">
              <div className="row paginate">
                <div className="col-6">
                  {state.ads.current_page !== 1 && (
                    <button onClick={() => handlePagination(false)}>
                      <i aria-hidden className="fas fa-chevron-left"></i> Späť
                    </button>
                  )}
                </div>
                <div className="col-6 text-right">
                  {state.ads.current_page !== state.ads.last_page && (
                    <button onClick={() => handlePagination(true)}>
                      Ďalej <i aria-hidden className="fas fa-chevron-right"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-3">
          <div className="row">
            <div className="col-12">
              <UserPanel user={state.user} />
            </div>
            <div className="col-12">
              <Filter />
            </div>
            <div className="col-12">
              <Magazine apiUrl={state.api} />
            </div>
            <div className="col-12">
              <MostView apiUrl={state.api} url={state.url} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Index.getInitialProps = async function ({ params }) {
//   const res = await fetch(`https://autoblsak.sk/api/api/ads`);
//   const data = await res.json();
//   return {
//     data: data,
//   };
// };

export default Index;
