import updateImg from "../../../../../assets/update-img.png";
import deleteImg from "../../../../../assets/trash-bin_5055247.png";

const TodoList = ({ task, id, handleEditTasks, handleDeleteTasks }) => {
  return (
    <li className="flex bg-zinc-50 border shadow-xl justify-between items-center w-2/5 border-b border-gray-300 py-2 pe-4 m-auto mt-4 rounded-xl">
      <span className="ms-8 font-semibold">{task}</span>
      <div className="flex justify-center items-center">
        <img
          src={updateImg}
          className="w-20 h-16 cursor-pointer mx-4"
          alt="edit"
          onClick={() => handleEditTasks(task, id)}
        />
        <img
          src={deleteImg}
          className="w-11 h-12 cursor-pointer"
          alt="delete"
          onClick={() => handleDeleteTasks(id)}
        />
      </div>
    </li>
  );
};

export default TodoList;
