import type { AppProps } from 'next/app';
import Head from 'next/head';
import AppContext from '@lib/AppContext';
import '@styles/globals.css';
import * as ga from '../utils/utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    ga.initGA();
    ga.logPageView();
    router.events.on('routeChangeComplete', ga.logPageView);
    return () => {
      router.events.off('routeChangeComplete', ga.logPageView);
    };
  }, []);

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YY8ELH4ZN6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YY8ELH4ZN6');
            `,
          }}
        />
      </Head>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  );
}
