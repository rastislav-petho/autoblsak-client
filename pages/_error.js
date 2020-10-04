import React from 'react';
import { Layout } from '../components';
import Reveal from 'react-reveal/Reveal';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <Layout
      pageTitle={`Stránka sa nenašla - Autoblšák.sk`}
      pageDescription=""
      pageKeywords=""
    >
      <Reveal>
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h2 className="mb-5">OOOPS!!</h2>
            <h4>
              STRÁNKA, KTORÚ STE HĽADALI SA NENAŠLA PREJDITE PROSÍM NA NIEKTORÚ
              ZO STRÁNOK
            </h4>
            <div className="row mt-5">
              <div className="col-12 col-lg-4 mt-3">
                <Link href="/">
                  <button className="button">INZERCIA</button>
                </Link>
              </div>
              <div className="col-12 col-lg-4 mt-3">
                <a className="button" href="https://autoblsak.sk/magazin"></a>
              </div>
              <div className="col-12 col-lg-4 mt-3">
                <Link href="/kontakt">
                  <button className="button">KONTAKT</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
