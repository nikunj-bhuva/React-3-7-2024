import { useState } from "react";

const Counter = () => {
  // import usestate hook from react library //

  let [Count, setCount] = useState(0); //Initial Value

  // handle for decrement button //

  const handleDecrementButton = () =>
    Count > 0 ? setCount(Count - 1) : alert("error"); //update count variable to it's current value - 1

  // handle for increment button //

  const handleIncrementButton = () => setCount(Count + 1); //update count variable to it's current value + 1

  return (
    <>
      <button className="btn btn-warning mx-4" onClick={handleDecrementButton}>
        Decrement
      </button>
      <h1>{Count}</h1>
      <button className="btn btn-warning mx-4" onClick={handleIncrementButton}>
        Increment
      </button>
    </>
  );
};

export default Counter;
