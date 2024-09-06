import { useState } from "react";

const ToggelMenu = () => {
  const [hideValue, setHideValue] = useState(false);

  // handler toggle //

  const handlerToggelBtn = () => {
    setHideValue(true);
  };

  // handler h3 //

  const handlerH3 = () => {
    setHideValue(false);
  };

  return (
    <div className="main">
      <p className="text-center mt-5 fw-bolder fs-5 bg-success text-white rounded-5 p-2">
        Click And Hide & Show.
      </p>
      <div
        className={`toggle-icon m-auto ${
          hideValue ? "w-50" : "w-25"
        } text-center mt-5`}
      >
        {hideValue ? (
          <h3
            role="button"
            className="text-center text-white bg-dark p-2 rounded-5 fs-3"
            onClick={handlerH3}
          >
            click and show toggle menu
          </h3>
        ) : (
          <svg
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="currentColor"
            className="bi bi-list m-auto bg-dark text-white rounded-2"
            viewBox="0 0 16 16"
            onClick={handlerToggelBtn}
          >
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default ToggelMenu;
