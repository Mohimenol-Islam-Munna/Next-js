import { useRouter } from "next/router";

const UserDetails = ({ user }) => {
    const router = useRouter();

    const { userId } = router.query;

    console.log("router object :::", router);

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
        ],
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    console.log("single user params ::", params);

    const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.userId}`
    );

    const user = await result.json();

    console.log("signle user :: ", user);

    return {
        props: {
            user: user,
        },
    };
}
