import Link from "next/link";

const Product = () => {

  let p_id = 10;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Product Page</h2>
      <div>
        <h3>
          <Link href="/product/1">
            <a>Product 1 details</a>
          </Link>
        </h3>
        <h3>
          <Link href="/product/2">
            <a>Product 2 details</a>
          </Link>
        </h3>

        <h3>
          <Link href={`/product/${p_id}`}>
            <a>Product {p_id} details</a>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Product;
