import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import "styles/globals.css";
import "styles/layout.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="Ecommerce Site" content="This is the Ecommerce Site"></meta>
      </Head>
      <Header><h2>ENV Variables :: {process.env.NEXT_PUBLIC_SHOPNAME}</h2></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
