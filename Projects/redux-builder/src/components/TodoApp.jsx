import { useDispatch, useSelector } from "react-redux";
import {
  setInputValue,
  setAddTasks,
  setUpdateTasks,
  setDeleteTasks,
  setEditId,
  setMessages,
} from "../redux/todoSlice";
import TodoAppTitle from "./TodoAppTitle";
import EmptyTodo from "./EmptyTodo";
import EmptyMsg from "./EmptyMsg";
import UpdateMsg from "./UpdateMsg";
import SuccessFullUpdateMessage from "./SuccessFullUpdateMessage";
import LengthErrorMsg from "./LengthErrorMsg";
import styles from "./TodoApp.module.css";
import addImg from "../assets/plus_11051528.png";
import updateImg from "../assets/update_6372226.png";
import todoListImg from "../assets/to-do-list.png";
import TodoList from "./TodoList";

const TodoApp = () => {
  const dispatch = useDispatch();
  const {
    inputValue,
    tasks,
    editId,
    emptyMessage,
    lengthMessage,
    updateMessage,
    successFullUpdateMessage,
  } = useSelector((state) => state.todos);

  const handleAddTasks = () => {
    if (!inputValue.trim()) {
      dispatch(setMessages({ emptyMessage: true }));
    } else if (inputValue.length < 3) {
      dispatch(setMessages({ lengthMessage: true }));
    } else {
      dispatch(setAddTasks(inputValue));
      dispatch(setInputValue(""));
      dispatch(setMessages({ emptyMessage: false, lengthMessage: false }));
    }
  };

  const handleUpdateTasks = () => {
    if (tasks[editId] === inputValue) {
      dispatch(setMessages({ updateMessage: true }));
    } else if (!inputValue) {
      dispatch(setMessages({ emptyMessage: true }));
    } else if (inputValue.length < 3) {
      dispatch(setMessages({ lengthMessage: true }));
    } else {
      dispatch(setUpdateTasks(inputValue));
      dispatch(setMessages({ successFullUpdateMessage: true }));
      setTimeout(() => {
        dispatch(setMessages({ successFullUpdateMessage: false }));
      }, 3000);
    }
  };

  const handleEditTasks = (task, idx) => {
    dispatch(setEditId(idx));
    dispatch(setInputValue(task));
  };

  const handleDeleteTasks = (idx) => {
    dispatch(setDeleteTasks(idx));
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
            onChange={(e) => dispatch(setInputValue(e.target.value))}
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
        {successFullUpdateMessage && <SuccessFullUpdateMessage />}
      </form>

      <ul className="flex flex-col">
        {tasks.length ? (
          tasks.map((task, idx) => (
            <TodoList
              key={idx}
              task={task}
              id={idx}
              handleEditTasks={handleEditTasks}
              handleDeleteTasks={handleDeleteTasks}
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
