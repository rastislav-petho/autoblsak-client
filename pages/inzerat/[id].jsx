import React, { useContext } from "react";
import { Context } from "../../context/context";
import fetch from "isomorphic-unfetch";
import { Layout, AdGallery } from "../../components";
import { getDateFromTimestamp } from "../../helpers";

const Inzerat = ({ data }) => {
  const { state, dispatch } = useContext(Context);
  const { id, brand, model, price, created, views, premium, photos } = data;

  console.log(state);
  return (
    <Layout pageTitle="Autoblšák.sk" pageDescription="" pageKeywords="">
      <div className="row inzerat">
        <div className="col-12">
          <div className="row inzerat-titles">
            <div className="col-12 col-lg-6">
              <h1>
                {brand} {model}
              </h1>
              <span>ID inzerátu: {id}</span> -{" "}
              <span>Zverejnené: {getDateFromTimestamp(created)}</span> -{" "}
              <span className="badge badge-success">
                <i aria-hidden className="far fa-eye"></i> {views}
              </span>{" "}
              {premium ? (
                <span>
                  {" "}
                  - <span className="badge badge-danger">TOP</span>
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="col-12 col-lg-6 text-right">
              <h1>{price} €</h1>
              {/* {state.favoriteAds.find(ad => ad.id === id) ? (
                <i
                  aria-hidden
                  className="fas fa-star add-to-favorites-button"
                ></i>
              ) : (
                <i
                  onClick={() =>
                    dispatch({ type: "ADD_TO_FAVORITES", ad: data })
                  }
                  aria-hidden
                  className="far fa-star add-to-favorites-button"
                ></i>
              )} */}
            </div>
          </div>
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
        <div className="col-12 col-lg-4 mt-4"></div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://autoblsak.sk/api/api/ad/${params.id}`);
  const data = await res.json();
  return {
    props: { data }
  };
}

export default Inzerat;
