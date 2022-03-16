import { useRouter } from "next/router";

const UserDetails = ({ user }) => {
  const router = useRouter();

  const { userId } = router.query; 

  // this is need when fallback is true  
  //   if (router.isFallback) {
  //     return <h3>Loading...</h3>;
  //   }

  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <h2>User Details</h2>
      <div>
        <h3>User Name: {user.name}</h3>
        <p>User Address {user.address && user.address.city}</p>
      </div>
    </div>
  );
};

export default UserDetails;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } },
      { params: { userId: "3" } },
      { params: { userId: "4" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );

  const user = await result.json();

  if (!user) {
    return {
      redirect: {
        destination: "/no-user",
      },
    };
  }

  return {
    props: {
      user: user,
    },
    revalidate: 10,
  };
}
