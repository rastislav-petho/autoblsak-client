import React, { Fragment, useContext } from 'react';
import { Context } from './../context/context';
import Head from 'next/head';
import { Header } from './Header';
import { Messages, CookiesSection, Footer } from './../components';
import { Favorites } from './Favorites';
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/router';

export const Layout = ({
  children,
  pageTitle,
  pageDescription,
  pageKeywords,
  image,
}) => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();

  const handlers = useSwipeable({
    onSwipedRight: () => router.push('/'),
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <Fragment>
      <Head>
        <base url="/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={image} />
        <title>{pageTitle}</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content={state.theme === 'light' ? '#FFFFFF' : '#121212'}
        />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossOrigin="anonymous"
        ></link>
        {state.theme === 'light' ? (
          <link rel="stylesheet" href="/light.css"></link>
        ) : (
          <link rel="stylesheet" href="/dark.css"></link>
        )}
      </Head>
      <CookiesSection />
      {state.message.type && (
        <Messages message={state.message} dispatch={dispatch} />
      )}

      <div className="container-fluid nav-bar p-0">
        <Header />
      </div>
      <div className="spacer"></div>
      <Favorites
        favorites={state.favoriteAds}
        collapse={state.config.toggleFavorites}
        dispatch={dispatch}
      />
      <div className="container content" {...handlers}>
        {children}
      </div>
      <div className="container-fluid p-0">
        <Footer />
      </div>
    </Fragment>
  );
};
