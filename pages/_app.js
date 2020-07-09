import React from 'react';
import NextApp from 'next/app';
import { ContextProvider } from './../context/context';

class App extends NextApp {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
<<<<<<< HEAD
        ctx.apiUrl = 'https//autoblsak.sk/api/api';
=======
        ctx.apiUrl = 'https://autoblsak.sk/api/api';
>>>>>>> develop

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