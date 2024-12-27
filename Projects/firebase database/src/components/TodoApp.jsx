import TodoAppTitle from "./TodoAppTitle";
import EmptyTodo from "./EmptyTodo";
import EmptyMsg from "./EmptyMsg";
import UpdateMsg from "./UpdateMsg";
import SuccessFullUpdateMsg from "./SuccessFullUpdateMsg";
import LengthErrorMsg from "./LengthErrorMsg";
import styles from "./TodoApp.module.css";
import addImg from "../assets/plus_11051528.png";
import updateImg from "../assets/update_6372226.png";
import todoListImg from "../assets/to-do-list.png";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [emptyMessage, setEmptyMessage] = useState(false);
  const [lengthMessage, setLengthMessage] = useState(false);
  const [updateMessage, setUpdateMessage] = useState(false);
  const [successFullUpdateMessage, setSuccessFullUpdateMessage] =
    useState(false);

  const data = collection(db, "todos");

  async function handleAddTasks() {
    if (inputValue.trim() === "") {
      setEmptyMessage(true);
      setLengthMessage(false);
    } else if (inputValue.length < 3) {
      setLengthMessage(true);
      setEmptyMessage(false);
    } else {
      await addDoc(data, { text: inputValue });
      setInputValue("");
      const getTodos = await getDocs(data);
      setTasks(getTodos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLengthMessage(false);
      setEmptyMessage(false);
    }
  }

  async function handleUpdateTasks() {
    const taskToUpdate = tasks.find((task) => task.id === editId);
    if (taskToUpdate && taskToUpdate.text === inputValue) {
      setUpdateMessage(true);
      setLengthMessage(false);
      setSuccessFullUpdateMessage(false);
      setEmptyMessage(false);
    } else if (!inputValue) {
      setEmptyMessage(true);
      setLengthMessage(false);
      setUpdateMessage(false);
    } else if (inputValue.length < 3) {
      setLengthMessage(true);
      setUpdateMessage(false);
      setEmptyMessage(false);
    } else {
      const updateTask = doc(db, "todos", editId);
      await updateDoc(updateTask, { text: inputValue });
      setInputValue("");
      setEditId(null);
      const getTodos = await getDocs(data);
      setTasks(getTodos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setSuccessFullUpdateMessage(true);
      setTimeout(() => {
        setSuccessFullUpdateMessage(false);
      }, 3000);
      setEmptyMessage(false);
      setUpdateMessage(false);
      setLengthMessage(false);
    }
  }

  async function handleDeleteTasks(id) {
    const deleteTask = doc(db, "todos", id);
    await deleteDoc(deleteTask);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  async function handleEditTasks(task) {
    const editTask = doc(db, "todos", task.id);
    setInputValue(task.text);
    setEditId(task.id);
  }

  useEffect(() => {
    async function fetchTodos() {
      const getTodos = await getDocs(data);
      setTasks(getTodos.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    fetchTodos();
  }, []);

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
            onChange={(e) => setInputValue(e.target.value)}
            name="task"
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

        {emptyMessage && <EmptyMsg />}
        {lengthMessage && <LengthErrorMsg />}
        {updateMessage && <UpdateMsg />}
        {successFullUpdateMessage && <SuccessFullUpdateMsg />}
      </form>

      <ul className="flex flex-col">
        {tasks.length ? (
          tasks.map((task) => (
            <TodoList
              key={task.id}
              task={task.text}
              id={task.id}
              taskObj={task}
              handleDeleteTasks={handleDeleteTasks}
              handleEditTasks={handleEditTasks}
            />
          ))
        ) : (
          <EmptyTodo />
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
