import { GET_ALL_POSTS } from "../actions/actionTypes";

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return [...action.payload];

    default:
      return state;
  }
};

export default postReducer;
