import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
