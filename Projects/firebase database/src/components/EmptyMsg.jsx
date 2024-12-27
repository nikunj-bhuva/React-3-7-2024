import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const EmptyMsg = () => {
  return (
    <div
      className="flex items-center text-red-500 font-semibold text-lg bg-red-100 p-4 rounded-lg shadow-lg 
                 mt-2 h-8 opacity-100 animate-fadeIn transition-all duration-500 ease-out"
    >
      <FontAwesomeIcon icon={faExclamationTriangle} className="mr-3" />
      Please enter your task!
    </div>
  );
};

export default EmptyMsg;
