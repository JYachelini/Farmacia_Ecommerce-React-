import { useState } from "react";
const Loader = () => {
  const [load, setLoad] = useState(true);
  const isLoading = () => {
    setLoad = false;
    return load;
  };

  return <>{isLoading ? <h1>Loading...</h1> : ""}</>;
};

export default Loader;
