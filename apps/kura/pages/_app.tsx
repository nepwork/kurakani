import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Layout from '../components/layout/Layout';

import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to KuraKani!</title>
      </Head>
      <Layout>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default CustomApp;
