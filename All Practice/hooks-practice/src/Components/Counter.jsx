import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlerPreviousBtn = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlerNextBtn = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-center">
      <div className="parent mt-5 mb-4 bg-info-subtle p-5 rounded-5">
        <button
          className="me-4 rounded-5 bg-dark text-white p-1"
          style={{ width: "75px" }}
          onClick={handlerPreviousBtn}
        >
          Previous
        </button>
        <span className="fs-3">{count}</span>
        <button
          className="ms-4 rounded-5 bg-dark text-white p-1"
          onClick={handlerNextBtn}
          style={{ width: "75px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Counter;
