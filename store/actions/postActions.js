import axios from "axios";
import { GET_ALL_POSTS } from "./actionTypes";

export const getAllPosts = () => async (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      dispatch({ type: GET_ALL_POSTS, payload: res.data });
    })
    .catch((err) => console.log("data fetching error :: ", err));
};
