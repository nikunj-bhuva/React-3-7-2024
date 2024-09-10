import { useState } from "react";
import ChildCounter from "./ChildCounter";

const Counter = () => {
  console.log("counter component re-rendered");
  // import usestate hook from react library //

  let [count, setCount] = useState(0); //Initial Value

  // handle for decrement button //

  const handleDecrementButton = () =>
    count > 0 ? setCount(count - 1) : alert("error"); //update count variable to it's current value - 1

  // handle for increment button //

  const handleIncrementButton = () => setCount(count + 1); //update count variable to it's current value + 1

  return (
    <>
      <div className="counter d-flex justify-content-center mt-5 bg-dark rounded-5 p-5 text-white">
        <button
          className="btn btn-warning mx-4"
          onClick={handleDecrementButton}
        >
          Decrement
        </button>
        <h1>{count}</h1>
        <button
          className="btn btn-warning mx-4"
          onClick={handleIncrementButton}
        >
          Increment
        </button>
      </div>
      <ChildCounter Count={count} />;
    </>
  );
};

export default Counter;
