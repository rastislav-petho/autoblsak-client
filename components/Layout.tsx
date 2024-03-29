import React, { FC, Fragment, useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import Head from "next/head";
import Cookies from "js-cookie";
import { Header } from "./Header";
import { Messages, CookiesSection, Footer } from ".";
import { Favorites } from "./Favorites";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";
import { getFilterQueryUrl } from "../helpers";
import { MobileFilter } from "./Filter";
import { initGA, logPageView } from "../helpers/googleAnalytics";
import ScrollToTop from "react-scroll-to-top";
import { ParsedUrlQueryInput } from "querystring";

type LayoutProps = {
  pageTitle: string;
  pageDescription: string;
  pageKeywords: string;
  image?: string;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { children, pageTitle, pageDescription, pageKeywords, image } = props;
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const [queryObject] = getFilterQueryUrl(state.filter, state.api);
  const cookie = Cookies.get("cookie");
  const [cookieVisible, setCookieVisible] = useState<boolean>(true);

  useEffect(() => {
    //@ts-ignore
    if ((!window.GA_INITIALIZED as any) && cookie === "true") {
      initGA();
      //@ts-ignore
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  const handlers = useSwipeable({
    onSwipedRight: () =>
      router.push({
        pathname: "/",
        query: queryObject as ParsedUrlQueryInput,
      }),
    preventDefaultTouchmoveEvent: true,
  });

  const handleCookie = (value: string) => {
    Cookies.set("cookie", value);
    setCookieVisible(false);
  };

  return (
    <Fragment>
      <Head>
        {/* @ts-ignore */}
        <base url="/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:image" content={image} />
        <title>{pageTitle}</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content={state.theme === "light" ? "#FFFFFF" : "#121212"}
        />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link>
        {/* <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
          crossOrigin="anonymous"
        ></link> */}
        {state.theme === "light" ? (
          <link rel="stylesheet" href="/light.css"></link>
        ) : (
          <link rel="stylesheet" href="/dark.css"></link>
        )}
      </Head>

      {state.message.type && <Messages />}
      <div className="container-fluid nav-bar p-0">
        <Header />
      </div>
      <div className="spacer"></div>
      {state.config.toggleFilter && <MobileFilter />}
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
      <ScrollToTop
        smooth
        color="#d90429"
        style={{ right: "15px", bottom: "15px" }}
      />
      {cookieVisible && !cookie && (
        <CookiesSection handleCookie={handleCookie} />
      )}
    </Fragment>
  );
};
