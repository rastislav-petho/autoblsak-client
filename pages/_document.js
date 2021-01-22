import Document, { Html, Head, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="sk">
        <Head />
        <body>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
