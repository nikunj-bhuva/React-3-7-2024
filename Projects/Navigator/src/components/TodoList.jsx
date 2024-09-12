import editLogo from "../assets/edit_738880.png";
import deleteLogo from "../assets/trash-bin_5055247.png";

const TodoList = ({ task, id, handleEditTasks, handleDeleteTasks }) => {
  return (
    <li className="d-flex justify-content-between m-2 align-items-center fw-bolder ps-4 bg-dark-subtle p-3 rounded-5 fs-5">
      {task}
      <div className="me-2">
        <img
          role="button"
          className="editImg"
          src={editLogo}
          alt={task}
          onClick={() => handleEditTasks(task,id)}
        />
        <img
          role="button"
          className="deleteImg"
          src={deleteLogo}
          alt={task}
          onClick={() => handleDeleteTasks(id)}
        />
      </div>
    </li>
  );
};

export default TodoList;
