import { useState } from "react";
import ColorIcon from "./Coloricon";
import ColorsData from "./Colorsdata";

const BackgroundChanger = () => {
  const [index, setIndex] = useState(0);

  const allColors = ColorsData();
  const showColors = allColors[index];

  const handlerPrevious = () => {
    index > 0 ? setIndex(index - 1) : setIndex(allColors.length - 1);
  };

  const handlerNext = () => {
    index < allColors.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  return (
    <>
      {allColors.length ? (
        <div className="w-100 d-flex justify-content-center align-items-center mb-5">
          <ColorIcon
            icon="bi bi-arrow-left-square-fill"
            path="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"
            onClick={handlerPrevious}
          />
          <div
            className="border border-3 border-dark mx-5 w-50 rounded-5"
            style={{ height: "200px", backgroundColor: `#${showColors}` }}
          ></div>
          <ColorIcon
            icon="bi bi-arrow-right-square-fill"
            path="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1"
            onClick={handlerNext}
          />
        </div>
      ) : (
        <p className="text-center bg-info-subtle fs-4 fw-medium p-3 mb-5 rounded-5">
          Sorry Data Not Found 🤦‍♀️.
        </p>
      )}
    </>
  );
};

export default BackgroundChanger;
