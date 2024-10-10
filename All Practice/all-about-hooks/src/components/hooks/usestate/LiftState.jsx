import DisplayInputValue from "./DisplayInputValue";
import InputValue from "./InputValue";
import { useState } from "react";

const LiftState = () => {
  let [userValue, setUserValue] = useState("");

  return (
    <>
      <InputValue
        userValue={userValue}
        onChange={(e) => setUserValue(e.target.value)}
      />
      <DisplayInputValue userValue={userValue} />
    </>
  );
};

export default LiftState;
