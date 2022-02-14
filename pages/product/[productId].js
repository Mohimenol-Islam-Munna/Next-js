import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  let p_id = router.query.productId;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Product Details Page</h2>
      <div>
        <h3>Product {p_id} details </h3>
      </div>
    </div>
  );
};

export default ProductDetails;
