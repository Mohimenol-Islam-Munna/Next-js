import Link from "next/link";

const Users = ({ users }) => {

  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <h2
        style={{
          border: "1px solid palegreen",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Users List
      </h2>
      <div>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid salmon",
              padding: "10px",
              borderRadius: "5px",
              margin: "10px 0px",
            }}
          >
            <h4>User Name: {user.name}</h4>
            <p>User Email: {user.email}</p>
            <button>
              <Link href={`/ssg/${user.id}`}>
                <a>Details</a>
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await result.json();

  // show data on terminal
  console.log("users list ::", users);

  return {
    props: { users },
  };
}
