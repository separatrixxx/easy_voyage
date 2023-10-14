import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Easy Voyage</title>
        <meta name='description' content='Easy Voyage' />
        <meta property='og:title' content='Easy Voyage' />
        <meta property='og:description' content='Easy Voyage' />
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.svg" type='image/svg+xml' />
      </Head>
      <Component {...pageProps} />
    </>

  );
}
