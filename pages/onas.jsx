import React from 'react';
import { Layout } from './../components';
import ReactHtmlParser from 'react-html-parser';

const Onas = ({ data }) => {
  return (
    <Layout
      pageTitle={`${data.title} - Autoblšák.sk`}
      pageDescription=""
      pageKeywords=""
    >
      <div className="row">
        <div className="col-12">
          <h4>{data.title}</h4>
          <p>
            Ponúkame Vám možnosť inzercie ojazdených i nových automobilov,
            motoriek, skútrov, náhradných dielov a mnoho iného. Inzerciu
            autoblsak.sk nájdete na webstránke{' '}
            <a href="https://autoblsak.sk/">https://autoblsak.sk/</a>. Okrem
            inzercie Vám každý deň prinášame nové články, rady a tipy, novinky
            automobilov a mnoho iného na našom blogu, ktorý sa nachádza na
            stránke
            <a href="https://autoblsak.sk/magazin">
              {' '}
              https://autoblsak.sk/magazin
            </a>
          </p>
          <p>
            Každý inzerát je automaticky zdieľaný aj v našej facebookovej
            skupine, kde je viac ako 100 000 členov, ktorí majú záujem
            predať/kúpiť svoje auto či náhradné diely. Práve vďaka tejto veľkej
            komunite je väčšia šanca, že sa Vám podarí predať Váš automobil
            alebo aj kúpiť svoje nové auto.
          </p>
          <h6>Podporte nás aj na Facebooku a Instagrame</h6>
          <p>
            Neváhajte sa pridať do našej{' '}
            <a href="https://www.facebook.com/groups/autoblsakinzercia/">
              FB skupiny
            </a>{' '}
            s názvom Autoblšak.sk Vaša auto–moto inzercia, v ktorej sa nachádza
            viac ako 100 000 členov. Pre náhradné diely máme samostatnú{' '}
            <a href="https://www.facebook.com/groups/autoblsaknahradnediely/">
              FB skupinu
            </a>{' '}
            s názvom Náhradné diely Autoblšak.sk
          </p>

          <p>
            Inzercia Autoblšak.sk sa nachádza aj na{' '}
            <a href="https://www.instagram.com/autoblsak.sk/">Instagrame</a>,
            kde nás taktiež môžete podporiť @autoblsak.sk{' '}
          </p>

          <p>
            Magazín Autoblšak.sk má svoju osobitnú
            <a href="https://www.facebook.com/autoblsak/">FB stránku</a> s
            názvom Autoblšak auto-moto magazín
          </p>
          {/* {ReactHtmlParser(data.content)} */}
        </div>
      </div>
    </Layout>
  );
};

Onas.getInitialProps = async function () {
  const res = await fetch(`https://autoblsak.sk/api/api/page/5`);
  const data = await res.json();
  return {
    data: data
  };
};

export default Onas;
