const News = ({ news }) => {
  console.log("News List ::", news);

  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <h2>News List</h2>
      {news.map((n) => (
        <div
          key={n.id}
          style={{
            border: "1px solid salmon",
            padding: "10px",
            borderRadius: "5px",
            margin: "10px 0px",
          }}
        >
          <h3>News Title: {n.title}</h3>
          <p>Description : {n.body}</p>
        </div>
      ))}
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}
