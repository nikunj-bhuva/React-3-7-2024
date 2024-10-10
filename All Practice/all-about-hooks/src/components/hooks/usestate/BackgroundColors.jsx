import { useState } from "react";
import { colors } from "../../ProductData";

const BackgroundColors = () => {
  const [index, setIndex] = useState(0); //initial value;

  // data of backgroundcolors //

  const backgroundColors = colors[index];
  console.log(backgroundColors);

  // handle previous button //

  const handlePreviousButton = () =>
    index > 0 ? setIndex(index - 1) : setIndex(colors.length - 1);

  // handle next button //

  const handleNextButton = () =>
    index < backgroundColors.length - 1 ? setIndex(index + 1) : setIndex(0);

  return (
    <div className="parent flex justify-center items-center mb-12">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handlePreviousButton}
      >
        Previous
      </button>
      <div
        className="child mx-7"
        style={{ backgroundColor: backgroundColors }}
      ></div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleNextButton}
      >
        Next
      </button>
    </div>
  );
};

export default BackgroundColors;
