import React, { useContext, useEffect, useCallback } from 'react';
import fetch from 'isomorphic-unfetch';
import { Context } from './../context/context';
import {
  Layout,
  Magazine,
  MostView,
  UserPanel,
  Pagination,
  Newsletter,
  Loading,
} from './../components';
import { Filter } from './../components/Filter';
import { Ad } from './../components/Ad';
import { useApi } from './../hooks';
import Reveal from 'react-reveal/Reveal';
import { scrollToTop } from './../helpers';

const Index = () => {
  const { state } = useContext(Context);
  const ads = state.ads.data;
  const { filter, adPagination } = useApi();

  useEffect(() => {
    filter();
  }, []);

  const handlePagination = (move) => {
    adPagination(move);
    scrollToTop();
  };

  return (
    <Layout pageTitle="Autoblšák.sk" pageDescription="" pageKeywords="">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-3 order-lg-1 order-2">
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
        <div className="col-12 col-md-12 col-lg-9 order-lg-2 order-1">
          <Reveal>
            <>
              {state.config.loading ? (
                <Loading />
              ) : (
                ads.map((ad) => <Ad ad={ad} key={ad.id} />)
              )}
            </>
          </Reveal>
          <div className="row">
            <Pagination
              currentPage={state.ads.current_page}
              lastPage={state.ads.last_page}
              handlePagination={handlePagination}
            />
          </div>
          <Newsletter />
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
