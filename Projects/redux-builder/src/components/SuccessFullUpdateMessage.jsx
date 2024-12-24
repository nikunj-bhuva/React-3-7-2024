import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SuccessFullUpdateMessage = () => {
  return (
    <div
      className="flex items-center text-green-500 font-semibold text-lg bg-green-100 p-4 rounded-lg shadow-lg 
                 mt-2 h-8 opacity-100 animate-fadeIn transition-all duration-500 ease-out"
    >
      <FontAwesomeIcon icon={faCheckCircle} className="mr-3" />
      Your task has been updated successfully! 🎉
    </div>
  );
};

export default SuccessFullUpdateMessage;
