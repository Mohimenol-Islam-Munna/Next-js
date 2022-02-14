import { useRouter } from "next/router";

const ReviewDetails = () => {
  const router = useRouter();

  const { productId, reviewId } = router.query;

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "salmon" }}>
        Review Id {reviewId} and Product {productId}
      </h2>
    </div>
  );
};

export default ReviewDetails;
