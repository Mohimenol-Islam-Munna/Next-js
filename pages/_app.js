import Head from "next/head";
import wrapper from "../store/index";
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
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default wrapper.withRedux(MyApp);
