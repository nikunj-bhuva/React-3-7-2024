import styles from "../todoapp/TodoApp.module.css";
import todoListImg from "../../../../../assets/to-do-list.png";
import addImg from "../../../../../assets/add_14595162.png";
import updateImg from "../../../../../assets/update-img.png";
import deleteImg from "../../../../../assets/trash-bin_5055247.png";
import { useState } from "react";

const TodoApp = () => {
  // initial state value to input value variable //

  const [inputValue, setInputValue] = useState(""); //initial value.

  // initial state value to add tasks variable //

  const [addTasks, setAddTasks] = useState([]); // initial value.

  // console.log("in main:", addTasks);

  // console.log("input value:", inputValue);

  const handleTodoInput = (e) => {
    setInputValue(e.target.value); //set input value in inputValue state variable.
  };

  // function to handle add tasks //

  const handleAddTasks = () => {
    setAddTasks([...addTasks, inputValue]); //addtasks to addTasks state variable.
    // console.log("in add task:", addTasks);
    setInputValue(""); //after add tasks input value is empty.
  };

  const handleDeleteTasks = (idx) => {
    setAddTasks(addTasks.filter((__, index) => index !== idx)); //set deleted tasks in addTasks state variable.
    console.log("delete", idx);
  };

  return (
    <div
      className={`main w-full font-serif shadow-2xl mt-24 pb-8 ${styles.main}`}
    >
      <h1 className="flex justify-center items-center mx-8 text-4xl mb-16 mt-4 bg-zinc-500 text-white font-bold p-3 rounded-full">
        Todo App <img src={todoListImg} className="w-16 ms-4" />
      </h1>
      <form className="m-auto w-2/5 mb-4 flex items-center">
        <input
          className="border border-2 border-gray-950 rounded-2xl p-2 font-bold mx-4 flex-grow"
          type="text"
          placeholder="Add your todo here..."
          value={inputValue}
          name="task"
          onChange={handleTodoInput}
        />
        <img
          src={addImg}
          className="w-14 cursor-pointer"
          onClick={handleAddTasks}
        />
      </form>
      <ul className="flex flex-col">
        {addTasks.map((task, idx) => {
          // debugger;
          return (
            /* {rendring list} */
            <li
              key={idx}
              className="flex bg-zinc-50 border shadow-xl justify-between items-center w-2/5 border-b border-gray-300 py-2 pe-4 m-auto mt-4 rounded-xl"
            >
              <span className="ms-8 font-semibold">{task.toUpperCase()}</span>
              <div className="flex justify-center items-center">
                <img
                  src={updateImg}
                  className="w-20 h-16 cursor-pointer mx-4"
                  alt="update"
                />
                <img
                  src={deleteImg}
                  className="w-11 h-12 cursor-pointer"
                  alt="delete"
                  onClick={() => handleDeleteTasks(idx)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
