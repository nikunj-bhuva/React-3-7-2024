import { useContext } from "react";
import CounterContext from "./context/context";

const Navbar = () => {
  const { count } = useContext(CounterContext);

  return (
    <div className="flex justify-around">
      <h3>Logo</h3>
      <h3>Count :- {count}</h3>
    </div>
  );
};

export default Navbar;
