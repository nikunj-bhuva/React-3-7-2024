import styles from "../components/TodoApp.module.css";
import addLogo from "../assets/add_14595162.png";
import todoLogo from "../assets/to-do-list.png";
import { useState } from "react";

const TodoApp = () => {
  let [taskValue, setTaskValue] = useState(""); //initial state value of taskvalue.
  let [items, setItems] = useState([]); //initial state value of items.
  let [editId, setEditId] = useState(null); //initial state value of editId.

  // handle input value //

  const handleInputValue = (e) => {
    setTaskValue(e.target.value); //set input value in taskvalue state.
  };

  const handleAddTasks = () => {
    if (taskValue.trim() === "") {
      alert("please enter your todo Items!"); //empty task value msg.
    } else if (taskValue.length < 4) {
      alert("you must enter minimun 4 Characters!"); //minimum 4 characters msg.
    } else {
      setItems([...items, taskValue]); //set new task values in items.
      setTaskValue(""); //empty taskvalue after adding tasks.
    }
  };

  // handle for update tasks //

  const handleupdateTasks = () => {
    if (taskValue === "") {
      alert("please update your todo Items!"); //empty taskvalue msg.
    } else if (taskValue.length < 4) {
      alert("you must enter minimun 4 Characters!");
    } else {
      let updateItems = [...items];
      updateItems[editId] = taskValue; //update taskvalue in updated items.
      setItems(updateItems); //update items in items state.
      setTaskValue(""); //empty task value after update items.
      setEditId(null); //update editId after update items.
    }
  };

  // handle for edit tasks //

  const handleEditTasks = (editTask, editId) => {
    setEditId(editId); //set editId in editId state.
    setTaskValue(editTask); //edit task item in task value.
  };

  // handle for delete tasks //

  const handleDeleteTasks = (id) => {
    setItems(items.filter((__, idx) => idx !== id)); //set deleted items
  };

  // remove dulication values in items //

  const removeDuplicateItems = items.filter(
    (item, index, items) => index === items.indexOf(item)
  );

  return (
    <div className={`container ${styles.main} mt-5`}>
      <h1 className="text-center mb-5 pt-4 text-dark">
        Todo App
        <img src={todoLogo} alt="To-do List" className={styles.todoImg} />
      </h1>
      <div className="d-flex justify-content-center">
        <form className="w-50" onSubmit={(e) => e.preventDefault()}>
          <div className={`${styles.inputWrapper} d-flex`}>
            <input
              type="text"
              className={`form-control me-3 ${styles.formControl}`}
              placeholder="Add your todo here..."
              value={taskValue}
              onChange={handleInputValue}
            />
            {editId === null ? (
              <button
                className={`btn ${styles.addButton}`}
                onClick={handleAddTasks}
              >
                Add
              </button>
            ) : (
              <button
                className={`btn ${styles.addButton}`}
                onClick={handleupdateTasks}
              >
                Update
              </button>
            )}
          </div>
          <ul className="list-unstyled mt-4">
            {/* rendering todo items */}
            {removeDuplicateItems.map((item, id) => (
              <li
                key={id}
                className={`${styles.listItem} d-flex justify-content-between align-items-center`}
              >
                {item}
                <div>
                  <button
                    className={`btn ${styles.editButton}`}
                    onClick={() => handleEditTasks(item, id)}
                  >
                    Edit
                  </button>
                  <button
                    className={`btn text-center ms-3 ${styles.deleteButton}`}
                    onClick={() => handleDeleteTasks(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default TodoApp;
