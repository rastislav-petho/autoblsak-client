import React, { useReducer, createContext } from "react";
import reducer from "./../reducer/reducer";
import { cookiesManager } from "./../helpers/helpers";

export const Context = createContext();

export const ContextProvider = props => {
  const user = cookiesManager("get", "user");

  const initialState = {
    language: "sk",
    url: "https://autoblsak.sk/",
    api: "http://localhost:80/api",
    user: user,
    theme: "dark",
    ads: [],
    favoriteAds: [],
    message: {
      type: null,
      message: null
    },
    config: {
      toggleFilter: false,
      toggleFavorites: false
    },
    filter: {
      brand: "",
      model: "",
      fuel: "",
      transmision: "",
      color: "",
      yearFrom: "",
      yearTo: "",
      priceFrom: "",
      priceTo: "",
      kmFrom: "",
      kmTo: "",
      powerFrom: "",
      powerTo: ""
    },
    brands: [],
    models: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
