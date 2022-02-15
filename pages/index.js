import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const navigateHandler = () => {
    console.log("novigation successfull after click");
    // router.replace("/product"); its also work like replace in Link 
    router.push("/product");
  };

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
      <div>
        <button onClick={navigateHandler}>
          Click Me To Nagigate Another Page/Route
        </button>
      </div>
    </div>
  );
};

export default Home;
