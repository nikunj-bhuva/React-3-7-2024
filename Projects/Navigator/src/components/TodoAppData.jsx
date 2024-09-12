import TodoList from "./TodoList";
import { useEffect, useState } from "react";

const TodoAppData = ({ addItems, setAddItems }) => {
  let [editId, setEditId] = useState(null);

  useEffect(() => {
    let getTodoData = JSON.parse(localStorage.getItem("todoData")) || [];
    setAddItems(getTodoData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(addItems));
  }, [addItems]);

  const handleEditTasks = (editTask, idx) => {
    setEditId(idx);
    let updateValue = prompt("update value", editTask);
    if (updateValue.trim() === "") {
      alert("please update your task");
    } else {
      const updatedItems = addItems.map((task, index) =>
        index === editId ? updateValue.trim() : task
      );
      setAddItems(updatedItems);
    }
  };

  const handleDeleteTasks = (id) => {
    setAddItems(addItems.filter((__, idx) => idx !== id));
    localStorage.setItem(
      "todoData",
      JSON.stringify(addItems.filter((__, idx) => idx !== id))
    );
  };

  return (
    <ul className="text-center list-unstyled m-auto d-flex flex-column mt-3">
      {/* rendring list */}
      {addItems.map((task, id) => {
        return (
          <TodoList
            task={task}
            key={id}
            id={id}
            handleEditTasks={handleEditTasks}
            handleDeleteTasks={handleDeleteTasks}
          />
        );
      })}
    </ul>
  );
};

export default TodoAppData;
