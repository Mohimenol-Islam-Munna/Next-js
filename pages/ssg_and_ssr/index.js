import axios from "axios";

const Card = ({ data }) => {
  console.log("data in component function :::", data);
  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <h2>Blogs List : Blog</h2>
      <h3>Blogs Title: </h3>
      <p>Description : </p>
    </div>
  );
};

export default Card;

Card.getInitialProps = async (context) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

//   console.log("response data in getInitialProps method ::", res.data); 

  return { data: res.data };
};
