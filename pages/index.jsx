import React, { useContext, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import { Context } from './../context/context';
import { Layout, Ad } from './../components';

const Index = ({ data }) => {
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
        dispatch({ type: 'SET_ADS', ads: data.data });
    }, []);
    console.log(state);
    return (
        <Layout
            pageTitle="Autoblšák.sk"
            pageDescription=""
            pageKeywords=""
        >
            
            {state.ads.map((ad) => <Ad ad={ad} key={ad.id} />)}

        </Layout>
    );
};

Index.getInitialProps = async function (ctx) {
    const res = await fetch('http://localhost/api/ads');
    const data = await res.json();
    return {
        data: data
    };
};

export default Index;



