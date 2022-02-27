import React from "react";
import { useSelector } from "react-redux";

function PostChildComponent() {
  const state = useSelector((state) => state);

  console.log("redux store in PostChild component of blog pages", state);

  return (
    <div>
      <h3>PostChildComponent For Redux store Check</h3>
    </div>
  );
}

export default PostChildComponent;
