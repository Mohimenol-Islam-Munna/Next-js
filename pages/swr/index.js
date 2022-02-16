import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";

const ImagesGellary = () => {
  const { data, error } = useSWR("swrp", async () => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((res) => {
      return res.data;
    });
  });

  console.log("data fetching with swr ::", data);

  if (error) {
    return <h2>Data Fetching Error</h2>;
  }

  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <h2>Images Gellary</h2>
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
