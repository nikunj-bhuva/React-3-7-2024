import styles from "../todoapp/TodoApp.module.css";
import todoListImg from "../../../../../assets/to-do-list.png";
import addImg from "../../../../../assets/add_14595162.png";
import updateImg from "../../../../../assets/update-img.png";
import { useState } from "react";
import TodoList from "./TodoList";
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

  const [addTasks, setAddTasks] = useState([]); // initial value.

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
    } else if (inputValue.length < 3) {
      setLengthMessage(true); //set length error message to lengthErrorMessage state variable.
      setUpdateMessage(false);
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
      }, 1000); // 1000 milliseconds = 1 second
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
      className={`main w-full font-serif shadow-2xl mt-24 pb-8 ${styles.main}`}
    >
      <TodoAppTitle imgSrc={todoListImg} />
      <form className="m-auto w-2/5 mb-4 relative flex flex-col items-center">
        <div className="flex w-full items-center">
          <input
            className="border border-2 border-gray-950 rounded-2xl p-2 font-bold mx-4 flex-grow"
            type="text"
            placeholder="Add your todo here..."
            value={inputValue}
            name="task"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {editId !== null ? (
            <img
              src={updateImg}
              className="w-14 cursor-pointer"
              alt="update"
              onClick={handleUpdateTasks}
            />
          ) : (
            <img
              src={addImg}
              className="w-14 cursor-pointer"
              alt="add"
              onClick={handleAddTasks}
            />
          )}
        </div>
        {emptyMessage && <EmptyMessage />}
        {lengthMessage && <LengthErrorMessage />}
        {updateMessage && <UpdateMessage />}
        {successFullUpdateMessage && <SuccessFullUpdateMessage />}
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
