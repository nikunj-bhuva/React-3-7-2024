import { useEffect, useReducer } from "react";

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        if (state > 0) {
          return state - 1;
        } else {
          return 0;
        }
      case "RESET":
        return 0;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("count")) || 0
  ); //reducer function ane initial state value apvani count ni //

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <div className="flex justify-center items-center mt-6 bg-stone-700 p-8 rounded-full">
        <button
          className="bg-green-400 text-white p-2 font-bold w-12 rounded text-3xl"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
        <span className="font-bold mx-6 text-2xl text-white">{state}</span>
        <button
          className="bg-green-400 text-white p-2 font-bold w-12 rounded text-3xl"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-green-400 text-white p-2 font-bold w-18 mt-2 rounded text-2xl"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
