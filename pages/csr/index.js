import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [isLoadding, setIsLoadding] = useState(true);
  const [blogs, setBloges] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setBloges(res.data);
        setIsLoadding(false);
      })
      .catch((err) => console.log("Data fetching error ::", err));
  }, []);

  if (isLoadding) {
    return <h2>Loadding...</h2>;
  }

  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <h2>Blogs List</h2>
      {blogs.map((n) => (
        <div
          key={n.id}
          style={{
            border: "1px solid salmon",
            padding: "10px",
            borderRadius: "5px",
            margin: "10px 0px",
          }}
        >
          <h3>Blogs Title: {n.title}</h3>
          <p>Description : {n.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
