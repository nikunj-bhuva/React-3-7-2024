import editImg from "../assets/edit_9457213.png";
import deleteImg from "../assets/trash-bin_5055247.png";

const TodoList = ({ task, id, handleEditTasks, handleDeleteTasks }) => {
  return (
    <li className="flex bg-white shadow-xl justify-between items-center w-3/5 py-4 px-6 m-auto mt-6 rounded-xl border-4 border-[#b4e1f0] border-solid focus:outline-none focus:ring-2 focus:ring-[#b4e1f0] transition-all duration-500 ease-in-out">
      <span className="text-lg font-semibold text-[#3e4e58]">
        {task.toUpperCase()}
      </span>
      <div className="flex justify-center items-center space-x-6">
        <img
          src={editImg}
          className="w-14 h-14 cursor-pointer transition-transform hover:scale-110 hover:rotate-6 duration-300"
          alt="edit"
          onClick={() => handleEditTasks(task, id)}
        />
        <img
          src={deleteImg}
          className="w-14 h-14 cursor-pointer transition-transform hover:scale-110 hover:rotate-12 duration-300"
          alt="delete"
          onClick={() => handleDeleteTasks(id)}
        />
      </div>
    </li>
  );
};

export default TodoList;
