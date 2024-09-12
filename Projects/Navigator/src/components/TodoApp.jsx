import addLogo from "../assets/add_14595162.png";
import { useEffect } from "react";

const TodoApp = ({ userValue, setUserValue, addItems, setAddItems }) => {
  const handlerInput = (e) => {
    setUserValue(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(addItems));
    console.log(addItems);
  }, [addItems]);

  const handlerAddTask = () => {
    if (userValue === "") {
      alert("please enter your Value!");
    } else {
      setAddItems([...addItems, userValue]);
      setUserValue("");
    }
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-5 bg-warning-subtle rounded-5 p-3 fw-bold">
        Todo App
      </h1>
      <div className="input d-flex justify-content-center bg-dark p-4">
        <input
          type="text"
          className="form-control w-25 fw-medium"
          id="formGroupExampleInput"
          value={userValue}
          placeholder="Add todo items..."
          onChange={handlerInput}
        />
        <div>
          <img
            role="button"
            className="addImg"
            src={addLogo}
            alt="Add task"
            onClick={handlerAddTask}
          />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
