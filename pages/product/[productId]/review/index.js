import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();

  const { productId } = router.query;

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "salmon" }}>
        Reviews of Product {productId}
      </h2>
    </div>
  );
};

export default Review;
