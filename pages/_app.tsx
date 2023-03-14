import React from "react";
import { AppProps } from "next/app";
import "@styles/global.css";
import { wrapper } from "@redux/store";
import ErrorBoundary from "@components/errorBoundary";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ErrorBoundary>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/static/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/static/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/static/favicon-16x16.png"
                />
                <link rel="manifest" href="/static/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Component {...pageProps} />
        </ErrorBoundary>
    );
}

export default wrapper.withRedux(MyApp);
