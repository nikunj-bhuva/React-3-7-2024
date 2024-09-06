import { useState } from "react";

const App = () => {
  // debugger;
  let [userValue, setUserValue] = useState("");
  let [addVal, setAddVal] = useState("");
  const handlerInput = (e) => {
    setUserValue(e.target.value);
  };

  const handlerAddValue = () => {
    userValue === "" ? alert("please enter your Value!") : setAddVal(userValue);
    setUserValue("");
  };

  return (
    <div className="conatiner">
      <h1 className="text-center mt-4 mb-4 bg-dark text-white p-2 rounded-5">
        Get Input Value
      </h1>
      <div className="input d-flex align-items-center justify-content-center">
        <input
          type="text"
          className="form-control w-25 mt-5 mb-5 fw-bolder"
          id="formGroupExampleInput"
          placeholder="enter your value"
          value={userValue}
          onChange={handlerInput}
        />
        <button
          className="btn btn-dark ms-2"
          style={{ height: "40px" }}
          onClick={handlerAddValue}
        >
          Click Me
        </button>
      </div>
      <h3 className="text-center bg-dark-subtle fw-medium p-2 rounded-5">
        Input Value: {addVal}
      </h3>
    </div>
  );
};

export default App;
