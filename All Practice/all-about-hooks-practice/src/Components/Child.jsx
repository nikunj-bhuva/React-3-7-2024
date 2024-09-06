import { useContext } from "react";
import { Context } from "./Context";

const Child = () => {
  let { count, setCount } = useContext(Context);

  return (
    <>
      <h3 className="fw-bolder pt-3">Child Count:- {count}</h3>
      <button
        className="btn btn-dark fw-medium mt-3"
        onClick={() => setCount(count + 5)}
      >
        +
      </button>
    </>
  );
};

export default Child;
