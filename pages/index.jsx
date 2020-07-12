import React, { useContext, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import { Context } from "./../context/context";
import { Layout, Ad } from "./../components";

const Index = ({ data }) => {
  const { state, dispatch } = useContext(Context);
  const ads = state.ads.data;
  const filter = state.filter;

  useEffect(() => {
    axios
      .post(`${state.api}/filter`, filter)
      .then(response => {
        if (response.status === 200 && response.data.data.length !== 0) {
          dispatch({ type: "SET_ADS", ads: response.data });
          dispatch({ type: "TOGGLE_FILTER", toogle: false });
        } else {
          dispatch({
            type: "SET_MESSAGE",
            message: {
              type: "warning",
              message: "Pre zvolený filter sa nenašli žiadne výsledky."
            }
          });
        }
      })
      .then(error => {
        if (error) {
          dispatch({
            type: "SET_MESSAGE",
            message: {
              type: "warning",
              message: "Chyba ! Kontaktujte administrátora"
            }
          });
        }
      });
  }, []);

  function handlePagination(move) {
    axios
      .post(
        `${state.api}/filter?page=${
          move ? state.ads.current_page + 1 : state.ads.current_page - 1
        }`,
        state.filter
      )
      .then(response => {
        if (response.status === 200 && response.data.length !== 0) {
          dispatch({ type: "SET_ADS", ads: response.data });
        } else {
          dispatch({
            type: "SET_MESSAGE",
            message: {
              type: "warning",
              message: "Pre zvolený filter sa nenašli žiadne výsledky."
            }
          });
        }
      })
      .then(error => {
        if (error) {
          dispatch({
            type: "SET_MESSAGE",
            message: {
              type: "warning",
              message: "Chyba ! Kontaktujte administrátora"
            }
          });
        }
      });
  }

  console.log("state", state);

  return (
    <Layout pageTitle="Autoblšák.sk" pageDescription="" pageKeywords="">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-3"></div>
        <div className="col-12 col-md-12 col-lg-9">
          {ads && ads.map(ad => <Ad ad={ad} key={ad.id} />)}
          <div className="row">
            <div className="col-12">
              <div className="paginate">
                <button onClick={() => handlePagination(false)}>
                  <i aria-hidden className="fas fa-chevron-left"></i>
                </button>{" "}
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
