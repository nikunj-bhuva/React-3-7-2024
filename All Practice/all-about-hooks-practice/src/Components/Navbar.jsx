import { useContext } from "react";
import { Context } from "./Context";

const Navbar = () => {
  const { count, setCount } = useContext(Context);

  return (
    <div className="logo d-flex justify-content-around text-center bg-dark p-3 text-white">
      <h3>Logo:-</h3>
      <h3>Count:- {count}</h3>
    </div>
  );
};

export default Navbar;
