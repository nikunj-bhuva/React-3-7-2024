import { useContext } from "react";
import CounterContext from "./context/context";

const ChildComponent = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <>
      <h2>Child Component Count :- {count}</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click
      </button>
    </>
  );
};

export default ChildComponent;
