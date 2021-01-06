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
            <img
              className="w-75"
              src="/img/404-car.png"
              alt="Stránku ktorú ste hladali sme nenašli"
            />
            <h4 className="mt-5">Stránku, ktorú ste hľadali sme nenašli.</h4>
            <div className="row mt-5 text-center">
              <div className="col">
                {' '}
                <Link href="/">
                  <button className="full-button" style={{ width: '250px' }}>
                    Prejsť na hlavnú stránku
                  </button>
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
