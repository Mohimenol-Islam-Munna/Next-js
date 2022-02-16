import Footer from "../components/Footer";

const About = () => {
    return (
      <div style={{textAlign: "center"}}>
        <h2>About Page</h2>
      </div>
    );
  };
  
  export default About;

  About.getLayout = function pageLayout(page){
    return (
      <>
      {page}
      <Footer />
      </>
    )
  }
  