import React from "react";
import wrapper from "../../store/index";

const Political = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Political Page</h2>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    console.log("context in political :::", store.getState());

    return {
      props: {
        data: "munna",
      },
    };
  }
);

export default Political;
