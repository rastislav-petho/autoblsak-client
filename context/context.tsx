import { useReducer, createContext, FC, Dispatch } from "react";
import reducer from "../reducer/reducer";
import Cookies from "js-cookie";
import { RESET_FILTER } from "../helpers/constants";
import {
  Ads,
  BrandType,
  Config,
  Favorite,
  Filter,
  Message,
  ModelType,
  Theme,
  User,
} from "helpers/types";

type State = {
  language: "sk";
  url: string;
  api: string;
  user: User | null;
  theme: Theme;
  ads: Ads | undefined;
  favoriteAds: Favorite[] | [];
  message: Message;
  config: Config;
  filter: Filter;
  brands: BrandType[];
  models: ModelType[];
};

interface IStateContext {
  state: State;
  dispatch: Dispatch<any>;
}

export const Context = createContext({} as IStateContext);

type ContextProviderProps = {
  children: any;
};

export const ContextProvider: FC<ContextProviderProps> = (props) => {
  const user: User = Cookies.getJSON("user");
  const theme = Cookies.get("theme");
  const favorites = Cookies.getJSON("fav");

  const initialState: State = {
    language: "sk",
    url: "https://autoblsak.sk",
    api: process.env.apiUrl,
    user: user,
    theme: theme ? theme : "light",
    ads: undefined,
    favoriteAds: favorites ? favorites : [],
    message: {
      type: null,
      message: null,
    },
    config: {
      toggleFilter: false,
      toggleFavorites: false,
      loading: true,
    },
    filter: RESET_FILTER,
    brands: [],
    models: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
