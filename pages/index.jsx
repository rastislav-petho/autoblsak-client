import React, { useContext, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import { Context } from './../context/context';
import { Layout, Ad } from './../components';

const Index = ({ data }) => {
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
        dispatch({ type: 'SET_ADS', ads: data.data });
    }, []);
    console.log('state', state);
    return (
        <Layout
            pageTitle="Autoblšák.sk"
            pageDescription=""
            pageKeywords=""
        >
            <div className="row">
                <div className="col-12 col-md-12 col-lg-8">
                    {state.ads.map((ad) => <Ad ad={ad} key={ad.id} />)}
                </div>
                <div className="col-12 col-md-12 col-lg-4">

                </div>
            </div>


        </Layout>
    );
};

Index.getInitialProps = async function (ctx) {
    const res = await fetch(`${ctx.apiUrl}/ads`);
    const data = await res.json();
    return {
        data: data
    };
};

export default Index;



