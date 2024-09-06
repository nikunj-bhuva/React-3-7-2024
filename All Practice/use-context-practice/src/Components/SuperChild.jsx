import { useContext } from "react";
import { Context } from "../App.jsx";

const SuperChild = () => {
  let { studentName, rollNo, onUpdate } = useContext(Context);

  return (
    <>
      <h3>Student Name:{studentName}</h3>
      <h3>Roll No.: {rollNo}</h3>
      <button className="btn btn-success" onClick={onUpdate}>
        Click Me!
      </button>
    </>
  );
};

export default SuperChild;
