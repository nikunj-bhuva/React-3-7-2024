import { useState } from "react";
import styles from "../Component/Backgroundcolor.module.css";

function Backgroundcolor() {
  let [currentIndex, setIndex] = useState(0);

  const backgroundValues = ["yellow", "blue", "red", "orange", "pink"];

  const changeValue = backgroundValues[currentIndex];

  // incrent function defination //

  const handleIncrement = () =>
    currentIndex < backgroundValues.length - 1
      ? setIndex(currentIndex + 1)
      : setIndex(0);

  // decrement function defination //

  const handleDecrement = () =>
    currentIndex > 0
      ? setIndex(currentIndex - 1)
      : setIndex(backgroundValues.length - 1);

  return (
    <>
      <h1 className="text-center bg-warning rounded-5 mb-5">
        Background Changer
      </h1>
      <div className="container d-flex justify-content-center gap-5">
        <span className="align-content-center">
          <svg
            onClick={handleDecrement}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
          </svg>
        </span>
        <div
          className={`border border-4 border-dark rounded-4 mt-5 mb-5 ${styles.main}`}
          style={{ backgroundColor: changeValue }}
        ></div>
        <span className="align-content-center">
          <svg
            onClick={handleIncrement}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-arrow-right-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
          </svg>
        </span>
      </div>
    </>
  );
}

export default Backgroundcolor;
