import { useState } from "react";
import Navbar from "./Components/Navbar";
import Parent from "./Components/Parent";
import { Context } from "./Components/Context";

const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <Context.Provider value={{ count, setCount }}>
        <Navbar Count={count} />
        <Parent Count={count} />
      </Context.Provider>
      <div className="text-center p-3 bg-danger-subtle">
        <h1>Count:- {count}</h1>
        <button
          className="btn btn-dark fw-medium mt-3"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
