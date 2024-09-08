import { useEffect, useState } from "react";
import addLogo from "../assets/add_14595162.png";
import TodoList from "./TodoList";
import styles from "../components/TodoApp.module.css";

const TodoApp = () => {
  const [userValue, setUserValue] = useState(""); //input values state.
  const [addItems, setItems] = useState([]); //add items state.
  const [editId, setEditId] = useState(null); //editid state.

  // handler for input values //

  const handlerInput = (e) => {
    setUserValue(e.target.value);
  };

  // get tasks from local storage //

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("addItems")) || [];
    setItems(storedItems);
  }, []);

  // add tasks into local storage //

  useEffect(() => {
    localStorage.setItem("addItems", JSON.stringify(addItems));
  }, [addItems]);

  // handler for add tasks //

  const handlerAddTask = () => {
    userValue
      ? setItems([...addItems, userValue]) //add tasks into array.
      : alert("please enter your todo Items!"); //for empty message show.
    setUserValue(""); //after add task input field is empty.
  };

  // handler for update tasks //

  const handlerUpdateTasks = () => {
    let updateItems = [...addItems]; //copy original array
    updateItems.splice(editId, 1, userValue); //update array element
    setItems(updateItems); //update tasks
    setUserValue(""); //input value empty after update tasks.
    setEditId(null);
  };

  // handler for edit tasks //

  const handlerEditTasks = (edit, editId) => {
    setUserValue(edit); //edit value in inputfield.
    setEditId(editId); //editid set in state variable.
  };

  // handler for delete tasks //

  const handlerDeleteTasks = (id) => {
    // newItems.splice(id, 1);//avoid splice method in react because it modify orizinal array.
    setItems(addItems.filter((__, idx) => idx !== id)); //filter method is correct way to modify array.
  };

  return (
    <>
      <div className="input d-flex justify-content-center">
        <input
          type="text"
          className="form-control fw-medium"
          id="formGroupExampleInput"
          value={userValue}
          placeholder="Add todo items..."
          onChange={handlerInput}
        />
        <div>
          {editId !== null ? (
            <button
              role="button"
              className="btn btn-danger ms-3"
              onClick={handlerUpdateTasks}
            >
              Update
            </button>
          ) : (
            <img
              role="button"
              className={`${styles.addImg}`}
              src={addLogo}
              alt="Add task"
              onClick={handlerAddTask}
            />
          )}
        </div>
      </div>
      <ul className="text-center list-unstyled m-auto d-flex flex-column mt-3">
        {/* rendring list */}
        {addItems.map((task, id) => {
          return (
            <TodoList
              task={task}
              key={id}
              id={id}
              handlerEditTasks={handlerEditTasks}
              handlerDeleteTasks={handlerDeleteTasks}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoApp;
