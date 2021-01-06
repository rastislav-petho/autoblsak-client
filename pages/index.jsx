import React, { useContext, useEffect } from 'react';
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
  AdListHeader,
} from './../components';
import { Filter } from './../components/Filter';
import { Ad } from './../components/Ad';
import { useApi } from './../hooks';
import Reveal from 'react-reveal/Reveal';
import { scrollToTop, getFilterQueryUrl } from './../helpers';

const Index = (props) => {
  const { state, dispatch } = useContext(Context);
  const { adPagination, autoLogout } = useApi();

  useEffect(() => {
    if (state.user) {
      autoLogout(state.user.token);
    }
  }, []);

  useEffect(() => {
    if (props.data.data.length == 0) {
      dispatch({
        type: 'SET_MESSAGE',
        message: {
          type: 'warning',
          message: 'Pre zvolený filter sa nenašli žiadne výsledky.',
        },
      });
    }

    dispatch({ type: 'SET_ADS', ads: props.data });
    dispatch({ type: 'TOGGLE_FILTER', toogle: false });
    if (state.ads) dispatch({ type: 'HANDLE_LOADING', loading: false });
  }, [props]);

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
              <Magazine data={props.magazineData} />
            </div>
            <div className="col-12">
              <MostView data={props.mostViewData} url={state.url} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-9 order-lg-2 order-1">
          <Reveal>
            <>
              {state.config.loading === false && (
                <AdListHeader
                  to={state.ads.to}
                  from={state.ads.from}
                  total={state.ads.total}
                  dispatch={dispatch}
                />
              )}

              {state.config.loading ? (
                <Loading />
              ) : (
                state.ads.data &&
                state.ads.data.map(
                  (ad) => ad.defaultPhoto != null && <Ad ad={ad} key={ad.id} />
                )
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

Index.getInitialProps = async function ({ query }) {
  const [, url] = getFilterQueryUrl(query, process.env.apiUrl);
  const res = await fetch(url + '&page=' + query.page);
  const data = await res.json();

  const magazine = await fetch(`${process.env.apiUrl}/magazine`);
  const magazineData = await magazine.json();

  const mostView = await fetch(`${process.env.apiUrl}/most-view`);
  const mostViewData = await mostView.json();
  return {
    data: data,
    magazineData: magazineData,
    mostViewData: mostViewData,
  };
};

export default Index;
