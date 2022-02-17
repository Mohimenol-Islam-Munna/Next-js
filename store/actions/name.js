import { CHANGE_NAME } from "./actionTypes";

export const changeName = () => {
  return (dispatch) => {
    console.log("data asche go 2");
    dispatch({ type: CHANGE_NAME, payload: "Mohimenol Islam Munna" });
  };
};
