import { useState } from "react";
import FoodInput from "./FoodInput";
import EmptyMsg from "./EmptyMsg";

const Fooditem = (props) => {
  console.log(props);
  // debugger;
  const [userValue, setUserValue] = useState("");
  const [showEmptyMsg, setEmptyMsg] = useState(false);

  const handlerInput = (e) => {
    console.log(e.target.value);
    if (e.key === "Enter") {
      if (userValue === "") {
        setEmptyMsg(true);
      } else {
        setEmptyMsg(false);
        props.addItem(e.target.value);
        console.log(userValue);
      }
    }
  };

  console.log(userValue);

  return (
    <div className="text-center">
      <FoodInput changeInput={handlerInput} />
      {showEmptyMsg === true ? <EmptyMsg /> : null}
      <ul className="list-group w-50 m-auto">
        {props.data.map((item, id) => {
          return (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between bg-white shadow p-4 fs-5 text-dark"
            >
              {item}
              <button
                className="btn btn-success"
                onClick={() => props.itemMsg(item)}
              >
                Buy
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Fooditem;
