import React from 'react';
import { Layout } from './../components';
import Reveal from 'react-reveal/Reveal';

function Error({ statusCode }) {
  return (
    <Layout
      pageTitle={`Stránka sa nenašla - Autoblšák.sk`}
      pageDescription=""
      pageKeywords=""
    >
      <Reveal>
        <div className="row">
          <div className="col-12 text-center">
            <h2>OOOPS!!</h2>
            <h4>
              STRÁNKA, KTORÚ STE HĽADALI SA NENAŠLA PREJDITE PROSÍM NA NIEKTORÚ
              ZO STRÁNOK
            </h4>
            <div className="row">
              <div className="col-12 col-lg-4">
                <Link href="/">
                  <button className="button">INZERCIA</button>
                </Link>
              </div>
              <div className="col-12 col-lg-4">
                <Link href="https://autoblsak.sk/magazin">
                  <button className="button">MAGAZÍN</button>
                </Link>
              </div>
              <div className="col-12 col-lg-4">
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