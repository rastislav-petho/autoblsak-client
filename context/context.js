import React, { useReducer, createContext } from 'react';
import reducer from './../reducer/reducer';

export const Context = createContext();

export const ContextProvider = (props) => {
    const initialState = {
        language: 'sk',
        url: 'https://autoblsak.sk/',
        api: 'http://localhost:80/api',
        theme: 'dark',
        ads: [],
        favoriteAds: [],
        config: {
            toggleFilter: false,
            toggleFavorites: false,
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}