import Link from "next/link";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Home Page</h2>
      <div>
        <ul style={{ listStyle: "none" }}>
          <Link href="/blog">
            <a style={{ display: "block" }}>Blog</a>
          </Link>
          <Link href="/docs">
            <a style={{ display: "block" }}>Docs</a>
          </Link>
          <Link href="/product">
            <a style={{ display: "block" }}>Product</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Home;
