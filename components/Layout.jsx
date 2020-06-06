import React, { Fragment, useContext } from 'react';
import { Context } from './../context/context';
import Head from 'next/head';
import { Filter, Favorites, Header } from './index';

export const Layout = ({
    children,
    pageTitle,
    pageDescription,
    pageKeywords
}) => {

    const {state} = useContext(Context);

    return (
        <Fragment>
            <Head>
                <base url="/" />
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content={state.theme === 'light' ? '#FFFFFF' : '#121212'} />
                <meta name="description" content={pageDescription}/>
                <meta name="keywords" content={pageKeywords}/>
                <title>{pageTitle}</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous"></link>
                {state.theme === 'light' ? 
                    <link rel="stylesheet" href="/style.css"></link> :
                    <link rel="stylesheet" href="/dark.css"></link>
                }
            </Head>
            <Filter />
            <Favorites />
            <div className="container">
                <Header />
                {children}
            </div>
        </Fragment>
    )
}