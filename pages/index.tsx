import React, { useContext, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Context } from "../context/context";
import {
  Layout,
  Magazine,
  MostView,
  UserPanel,
  PaginationComponent,
  Newsletter,
  Loading,
  AdListHeader,
} from "../components";
import { Filter } from "../components/Filter";
import { Ad } from "../components/Ad";
import { useApi } from "../hooks";
import { scrollToTop, getFilterQueryUrl } from "../helpers";

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
        type: "SET_MESSAGE",
        message: {
          type: "warning",
          message: "Pre zvolený filter sa nenašli žiadne výsledky.",
        },
      });
    } else {
      dispatch({
        type: "SET_MESSAGE",
        message: {
          type: null,
          message: null,
        },
      });
    }

    dispatch({ type: "SET_ADS", ads: props.data });
    dispatch({ type: "TOGGLE_FILTER", toogle: false });
    if (state.ads) dispatch({ type: "HANDLE_LOADING", loading: false });
  }, [props, state.ads]);

  const handlePagination = (page) => {
    adPagination(page);
    scrollToTop();
  };

  return (
    <Layout
      pageTitle={props.indexData.settings.title}
      pageDescription={props.indexData.settings.description}
      pageKeywords={props.indexData.settings.keywords}
      image={`${state.url}/img/fb-logo.jpg`}
    >
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
              <Magazine data={props.indexData.magazine.data} />
            </div>
            <div className="col-12">
              <MostView data={props.indexData.mostView.data} url={state.url} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-9 order-lg-2 order-1">
          <>
            {state.config.loading === false && <AdListHeader />}

            {state.config.loading ? (
              <Loading />
            ) : (
              state.ads &&
              state.ads.data.map(
                (ad) => ad.defaultPhoto != null && <Ad ad={ad} key={ad.id} />
              )
            )}
          </>
          {state.ads && (
            <div className="row">
              <PaginationComponent
                currentPage={state.ads.current_page}
                handlePagination={handlePagination}
                total={state.ads.total}
                itemsCountPerPage={parseInt(
                  props.indexData.settings.max_ads_per_page
                )}
              />
            </div>
          )}
          <Newsletter />
        </div>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function ({ query }) {
  const [, url] = getFilterQueryUrl(query, process.env.apiUrl);
  const res = await fetch(url + "&page=" + query.page);
  const data = await res.json();

  const index = await fetch(`${process.env.apiUrl}/index-data`);
  const indexData = await index.json();
  return {
    data: data,
    indexData: indexData,
  };
};

export default Index;
