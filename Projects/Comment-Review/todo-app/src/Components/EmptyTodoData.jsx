import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const EmptyTodoData = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 opacity-0 animate-fadeIn transition-all duration-500 ease-out">
      <FontAwesomeIcon
        icon={faClipboardList}
        className="text-4xl text-gray-500 mb-4"
      />
      <h2 className="text-center text-xl font-semibold text-gray-600">
        Looks like you have no tasks yet. Start adding some! 🚀
      </h2>
    </div>
  );
};

export default EmptyTodoData;
