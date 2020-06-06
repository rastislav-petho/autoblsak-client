import React from 'react';
import NextApp from 'next/app';
import { ContextProvider } from './../context/context';

class App extends NextApp {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
        ctx.apiUrl = 'http://localhost:80/api';

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const {pageProps, Component} = this.props;
        return (
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        );
    }
}

export default App;