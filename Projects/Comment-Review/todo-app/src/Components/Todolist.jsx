import { useState } from "react";
import styles from "../Components/Todolist.module.css";
import img from "../assets/to-do-list.png";

const Todolist = () => {
  const [userValue, setUserValue] = useState("");
  const [lists, setLists] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handlerInput = (e) => {
    setUserValue(e.target.value);
  };

  const handlerAdd = () => {
    if (userValue.trim() === "") {
      alert("Please enter a value!");
    } else {
      if (isEditing) {
        setLists(
          lists.map((item, index) => (index === editIndex ? userValue : item))
        );
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setLists([...lists, userValue]);
      }
      setUserValue("");
    }
  };

  const handlerUpdate = (idx) => {
    setUserValue(lists[idx]);
    setIsEditing(true);
    setEditIndex(idx);
  };

  const handlerDelete = (idx) => {
    setLists(lists.filter((ele, index) => index !== idx));
  };

  const listItems = lists.map((element, idx) => (
    <li
      key={idx}
      className={`${styles.listItem} d-flex justify-content-between align-items-center`}
    >
      {element}
      <div>
        <button
          className={`btn ${styles.editButton}`}
          onClick={() => handlerUpdate(idx)}
        >
          Edit
        </button>
        <button
          className={`btn text-center ms-3 ${styles.deleteButton}`}
          onClick={() => handlerDelete(idx)}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return (
    <div className={`container ${styles.main} mt-5`}>
      <h1 className="text-center mb-5 pt-4 text-dark">
        Todo App <img src={img} alt="To-do List" className={styles.todoImg} />
      </h1>
      <div className="d-flex justify-content-center">
        <form className="w-50" onSubmit={(e) => e.preventDefault()}>
          <div className={`${styles.inputWrapper} d-flex`}>
            <input
              type="text"
              className={`form-control me-3 ${styles.formControl}`}
              placeholder="Add your todo here..."
              onChange={handlerInput}
              value={userValue}
            />
            <button className={`btn ${styles.addButton}`} onClick={handlerAdd}>
              {isEditing ? "Update" : "Add"}
            </button>
          </div>
          <ul className="list-unstyled mt-4">{listItems}</ul>
        </form>
      </div>
    </div>
  );
};

export default Todolist;
