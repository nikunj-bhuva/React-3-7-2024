import { useState } from "react";

const Counter = () => {
  // state variable and function to update the state variable //

  let [count, setCount] = useState(0); //initial state value;

  // handle decrement function //

  const handleDecrementButton = () => {
    if (count > 0) setCount(count - 1); //update the state variable initialvalue-1
  };

  // handle increment function //

  const handleIncrementButton = () => setCount(count + 1); //update the state variable initialvalue+1

  return (
    <div className="flex justify-center items-center mt-6 bg-stone-700 p-8 rounded-full">
      <button
        className="bg-green-400 text-white p-2 font-bold w-12 rounded text-3xl"
        onClick={handleDecrementButton}
      >
        -
      </button>
      <span className="font-bold mx-6 text-2xl text-white">{count}</span>
      <button
        className="bg-green-400 text-white p-2 font-bold w-12 rounded text-3xl"
        onClick={handleIncrementButton}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
