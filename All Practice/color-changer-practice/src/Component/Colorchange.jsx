import { useState } from "react";

const Colorchange = () => {
  const Colors = ["red", "blue", "green", "orange", "yellow", "pink"];

  const [currentIndex, setIndex] = useState(0);

  const changeIndex = Colors[currentIndex];
  console.log(changeIndex);

  const handlerColorChange = () => {
    currentIndex < Colors.length - 1 ? setIndex(currentIndex + 1) : setIndex(0);
    console.log(currentIndex);
  };

  return (
    <div className="container">
      <div
        className="main border border-4 border-dark mt-5 mb-4"
        style={{ height: "220px", backgroundColor: changeIndex }}
      ></div>
      <div className="text-center">
        <button className="btn btn-info" onClick={handlerColorChange}>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Colorchange;
