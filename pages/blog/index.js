import wrapper from "../../store/index";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../store/actions/postActions";
import axios from "axios";
import { GET_ALL_POSTS } from "../../store/actions/actionTypes";
import PostChildComponent from "../../components/PostChildComponent";

const Blog = ({ data }) => {
  const postList = useSelector((state) => state.postReducer);

  console.log("postList ::: ", postList);

  return (
    <div style={{ width: "60%", margin: "20px auto" }}>
      <div>
        <PostChildComponent />
      </div>

      <h2>Blog Posts</h2>
      {postList.map((post) => (
        <div
          style={{
            border: "1px solid salmon",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "10px",
          }}
          key={post.id}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    console.log("context :::", store);

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    store.dispatch({ type: GET_ALL_POSTS, payload: res.data });

    return {
      props: {
        data: "munna",
      },
    };
  }
);

export default Blog;
