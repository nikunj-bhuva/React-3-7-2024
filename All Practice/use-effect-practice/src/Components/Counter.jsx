import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlerIncrement = () => {
    setCount(count + 1);
  };

  console.log("component mount");

  const handlerDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // useeffect function to be two parameters first as a callback function and second as dependency array. //

  useEffect(() => {
    //call to be executed
    console.log(count);
    console.log("component update");

    // optional return something //

    return () => {
      console.log("cleaned up");
      // console.log("unmount");
    };
  }, [count]); //dependency array

  return (
    <>
      <h1 className="text-center mb-5 mt-4 bg-info-subtle">Counter</h1>
      <div className="bg-dark p-5 text-center border border-4 border-info-subtle">
        <button
          type="button"
          onClick={handlerDecrement}
          className="btn btn-info mx-3"
        >
          Decrement
        </button>
        <span className="fs-3 text-light">{count}</span>
        <button
          type="button"
          onClick={handlerIncrement}
          className="btn btn-info mx-3"
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
