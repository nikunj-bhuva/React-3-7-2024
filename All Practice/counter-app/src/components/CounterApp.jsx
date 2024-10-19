import { useEffect, useState } from "react";
import CounterButton from "./CounterButton";

const CounterApp = () => {
  let [count, setCount] = useState(
    JSON.parse(localStorage.getItem("text")) || 0
  );

  useEffect(() => {
    console.log("in useeffect function", count);
    localStorage.setItem("text", JSON.stringify(count));
  }, [count]);

  const handleDecrementButton = () => {
    setCount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  const handleIncrementButton = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="text-center mt-5 mb-4 bg-dark-subtle rounded-5 p-5 d-flex justify-content-center align-items-center mx-5">
      <CounterButton value="-" onClick={handleDecrementButton} />
      <h2 className="fs-1 fw-bolder mx-5">{count}</h2>
      <CounterButton value="+" onClick={handleIncrementButton} />
    </div>
  );
};

export default CounterApp;
