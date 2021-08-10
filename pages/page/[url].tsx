import React from 'react';
import { Layout } from '../../components';
import ReactHtmlParser from 'react-html-parser';

const Page = ({ data }) => {
  return (
    <Layout
      pageTitle={`${data.title} - Autoblšák.sk`}
      pageDescription=""
      pageKeywords=""
    >
      <div className="row">
        <div className="col-12">
          <h4>{data.title}</h4>
          {ReactHtmlParser(data.content)}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.apiUrl}/page/${params.url}`);
  const data = await res.json();
  return {
    props: { data },
  };
}

export default Page;
