import Head from "next/head";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="About Page" content="This is the about page"></meta>
      </Head>
      <div style={{ textAlign: "center" }}>
        <h2>About Page</h2>
      </div>
    </>
  );
};

export default About;

About.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
