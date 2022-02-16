import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import "../styles/layout.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>Content</Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
