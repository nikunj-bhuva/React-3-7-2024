import { useState } from "react";
import NotFoundData from "./NotFoundData";
import addLogo from "../assets/add_14595162.png";
import editLogo from "../assets/edit_738880.png";
import deleteLogo from "../assets/trash-bin_5055247.png";
import styles from "../Components/Todoapp.module.css";

const TodoApp = () => {
  // debugger;

  const [userValue, setUserValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  // Handler Input //

  const handlerInput = (e) => {
    // debugger;
    setUserValue(e.target.value);
    console.log(e.target.value);
  };

  // Add Tasks Handler //

  const handlerAddTask = () => {
    // debugger;
    userValue === ""
      ? alert("please enter your value!")
      :  setTasks([...tasks, userValue]);
    setUserValue("");
  };

  // Edit Tasks Handler //

  const handlerEditTask = (edit, id) => {
    // debugger;
    setUserValue(edit);
    setEditId(id);
    console.log(edit);
    console.log(id);
  };

  // Delete Tasks Handler //

  const handlerDeleteTask = (id) => {
    // console.log(id);
    setTasks(tasks.filter((value, idx) => idx !== id));
    // debugger;
    // const filterTask = tasks.filter((b, idx) => {
    //   // console.log(idx === id);
    //   return idx !== id;
    // });
    // console.log(filterTask);
    // setTasks(filterTask);
  };

  const taskList = tasks.map((value, id) => {
    // debugger;
    return (
      <li
        key={id}
        className="d-flex justify-content-between m-2 align-items-center fw-bolder ps-4 bg-dark-subtle p-3 rounded-5 fs-5"
      >
        {value}
        <div>
          <img
            role="button"
            className={`${styles.editImg}`}
            src={editLogo}
            alt={value}
            onClick={() => handlerEditTask(value, id)}
          />
          <img
            role="button"
            className={`${styles.deleteImg}`}
            src={deleteLogo}
            alt={value}
            onClick={() => handlerDeleteTask(id)}
          />
        </div>
      </li>
    );
  });

  console.log(taskList);
  console.log(tasks);

  return (
    <>
      <div className="input d-flex justify-content-center">
        <input
          type="text"
          className="form-control fw-bolder"
          id="formGroupExampleInput"
          placeholder="Add todo items..."
          value={userValue}
          onChange={handlerInput}
        />
        <img
          role="button"
          className={`${styles.addImg}`}
          src={addLogo}
          alt={addLogo}
          onClick={handlerAddTask}
        />
      </div>
      <div>
        <ul className="text-center list-unstyled m-auto d-flex flex-column mt-3">
          {/* {tasks.map((value, idx) => (
          <li key={idx}>
            {value}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))} */}
          {taskList.length === 0 ? <NotFoundData /> : taskList}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
