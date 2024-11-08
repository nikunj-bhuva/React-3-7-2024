import styles from "./TodoApp.module.css";
import todoListImg from "../assets/to-do-list.png";
import addImg from "../assets/plus_11051528.png";
import updateImg from "../assets/update_6372226.png";
import { useState } from "react";
import TodoList from "./Todolist";
import EmptyTodoData from "./EmptyTodoData";
import EmptyMessage from "./EmptyMessage";
import LengthErrorMessage from "./LengthErrorMessage";
import UpdateMessage from "./UpdateMessage";
import TodoAppTitle from "./TodoAppTitle";
import SuccessFullUpdateMessage from "./SuccessfullUpdateMessage";

const TodoApp = () => {
  // initial state value to input value state variable //

  const [inputValue, setInputValue] = useState(""); //initial value.

  // initial state value to add tasks state variable //

  const [addTasks, setAddTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  ); // initial value.

  console.log(addTasks);

  // store todo tasks into localstorage //

  localStorage.setItem("tasks", JSON.stringify(addTasks));

  // initial state value to editId state variable //

  const [editId, setEditId] = useState(null); //initial value.

  // initial state value to emptyMessage state variable //

  const [emptyMessage, setEmptyMessage] = useState(false);

  // initial state value to lengthMessage state variable //

  const [lengthMessage, setLengthMessage] = useState(false);

  // initial state value to updateMessage state variable //

  const [updateMessage, setUpdateMessage] = useState(false);

  const [successFullUpdateMessage, setSuccessFullUpdateMessage] =
    useState(false);

  // function to handle add tasks //

  const handleAddTasks = () => {
    if (!inputValue.trim()) {
      setEmptyMessage(true); //set empty message to EmptyMessage state variable.
    } else if (inputValue.length < 3) {
      setLengthMessage(true); //set length error message to lengthErrorMessage state variable.
      setEmptyMessage(false); //after adding input value in given input set emptyMessage false in state variable.
    } else {
      setAddTasks([...addTasks, inputValue]); //addtasks to addTasks state variable.
      setInputValue(""); //after add tasks input value is empty.
      setEmptyMessage(false); //after add tasks set empty message false to emptyMessage state variable.
      setLengthMessage(false); //after add 3 characters in given input field set lengthErrorMessage false to state variable.
    }
  };

  const handleUpdateTasks = () => {
    if (addTasks[editId] === inputValue) {
      setUpdateMessage(true); //after click on button and your task is old updateMessage is true.
      setLengthMessage(false); //length message false.
      setSuccessFullUpdateMessage(false); //successfullupdatemessage false.
      setEmptyMessage(false); //emptyMessage is false.
    } else if (!inputValue) {
      setEmptyMessage(true);
      setLengthMessage(false);
      setUpdateMessage(false);
    } else if (inputValue.length < 3) {
      setLengthMessage(true); //set length error message to lengthErrorMessage state variable.
      setUpdateMessage(false);
      setEmptyMessage(false);
    } else {
      let updateTasks = [...addTasks]; //store copy of addTasks into updateTasks array.
      updateTasks[editId] = inputValue; //update given editId into updateTasks array.
      setAddTasks(updateTasks); //updated tasks to addTasks state variable.
      setEditId(null); //editId null after update tasks to addTasks state variable.
      setInputValue(""); //inputValue is empty after update tasks to addTasks state variable.
      setSuccessFullUpdateMessage(true); //after update task in given input successFullUpdateMessage true.
      setUpdateMessage(false); //after update task in given input updateMessage is false.
      setLengthMessage(false); //after add 3 characters in given input field set lengthErrorMessage false to state variable.

      // Set a timeout to hide the success message after 1 seconds //

      setTimeout(() => {
        setSuccessFullUpdateMessage(false);
      }, 2000); // 2000 milliseconds = 2 second.
    }
  };

  // function to handle edit tasks //

  const handleEditTasks = (task, idx) => {
    setEditId(idx); //set editId after click on edit button.
    setInputValue(task); //set task to input value.
  };

  // function to handle delete tasks //

  const handleDeleteTasks = (idx) => {
    setAddTasks(addTasks.filter((__, index) => index !== idx)); //set deleted tasks in addTasks state variable.
  };

  return (
    <div
      className={`main w-2/3 border-4 border-white border-double rounded-2xl bg-gradient-to-r from-[#c2e8f9] to-[#f8d4bb] font-serif shadow-2xl mt-12 pb-8 mx-auto space-y-6 ${styles.main}`}
    >
      <TodoAppTitle imgSrc={todoListImg} />
      <form className="relative m-auto w-3/5 mb-4 relative flex flex-col items-center">
        <div className="flex w-full items-center">
          <input
            className="border-2 border-[#B7D8F1] focus:outline-none focus:ring-2 focus:ring-[#B7D8F1] transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-lg font-bold me-4 flex-grow placeholder-[#9DA5B4]"
            type="text"
            placeholder="Add your todo here..."
            value={inputValue}
            name="task"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {editId !== null ? (
            <img
              src={updateImg}
              className="w-14 cursor-pointer transition-transform hover:scale-110"
              alt="update"
              onClick={handleUpdateTasks}
            />
          ) : (
            <img
              src={addImg}
              className="w-14 cursor-pointer transition-transform hover:scale-110"
              alt="add"
              onClick={handleAddTasks}
            />
          )}
        </div>

        {emptyMessage && (
          <div className="absolute top-full left-0">
            <EmptyMessage />
          </div>
        )}
        {lengthMessage && (
          <div className="absolute top-full left-0">
            <LengthErrorMessage />
          </div>
        )}

        {updateMessage && (
          <div className="absolute top-full left-0">
            <UpdateMessage />
          </div>
        )}

        {successFullUpdateMessage && (
          <div className="absolute top-full left-0">
            <SuccessFullUpdateMessage />
          </div>
        )}
      </form>
      <ul className="flex flex-col">
        {addTasks.length ? (
          addTasks.map((task, idx) => (
            /*{rendringList}*/
            <TodoList
              key={idx}
              task={task}
              id={idx}
              handleEditTasks={handleEditTasks}
              handleDeleteTasks={handleDeleteTasks}
            />
          ))
        ) : (
          /*{emptyTodoData}*/
          <EmptyTodoData />
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
