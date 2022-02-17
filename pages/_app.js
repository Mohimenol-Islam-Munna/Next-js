import Head from "next/head";
import wrapper from "../store/index";
import Header from "components/Header";
import Footer from "components/Footer";
import { useSelector } from "react-redux";
import "styles/globals.css";
import "styles/layout.css";

function MyApp({ Component, pageProps }) {
  const { name } = useSelector((state) => state.name);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Ecommerce</title>
        <meta name="Ecommerce Site" content="This is the Ecommerce Site"></meta>
      </Head>
      <Header>
        <main>
          ENV Variables :: {process.env.NEXT_PUBLIC_SHOPNAME} :: {name}
        </main>
      </Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default wrapper.withRedux(MyApp);
