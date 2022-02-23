import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ImagesGellary = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/albums",
    fetcher
  );

  console.log("data fetching with swr ::", data);

  if (error) {
    return <h2>Data Fetching Error</h2>;
  }

  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <h2>Users List</h2>
      {data?.map((n) => (
        <div
          key={n.id}
          style={{
            border: "1px solid palegreen",
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

export default ImagesGellary;
