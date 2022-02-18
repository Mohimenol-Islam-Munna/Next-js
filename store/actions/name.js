import { CHANGE_NAME } from "./actionTypes";

export const changeName = () => {
  return (dispatch) => {
    dispatch({ type: CHANGE_NAME, payload: "Mohimenol Islam Munna" });
  };
};
