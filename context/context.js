import React, { useReducer, createContext } from 'react';
import reducer from './../reducer/reducer';

export const Context = createContext();

export const ContextProvider = (props) => {
    const initialState = {
        language: 'sk',
        url: 'https://autoblsak.sk/',
        api: '',
        theme: 'dark',
        ads: [],
        favoriteAds: [],
        filter: {},
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}