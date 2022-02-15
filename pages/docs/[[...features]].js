import {useRouter} from "next/router";

const Feature = () => {

    const router = useRouter();

    console.log("next router :::", router.query.features);

    return (
      <div style={{ textAlign: "center" }}>
        <h2>Docs Feature</h2>
        <p>Api Feature</p>
      </div>
    );
  };
  
  export default Feature;
  