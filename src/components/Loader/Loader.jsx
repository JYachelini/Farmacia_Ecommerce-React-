import { useState } from "react";
const Loader = () => {
  const [load, setLoad] = useState(true);
  const isLoading = () => {
    setLoad(false);
    return load;
  };

  return (
    <>
      {isLoading ? (
        <div className="loader-2">
          <div className="spin"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loader;
