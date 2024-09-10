import Child from "./Child";

const EventHandle = () => {
  const handleButtonClick = () => {
    alert("button is click successfully in event handle parent component");
  };

  const handleMouseEnter = () => {
    alert(
      "mouse enter in child component button but this function call in parent component"
    );
  };

  return (
    <>
      <Child onClick={handleButtonClick} onMouseOver={handleMouseEnter} />
    </>
  );
};

export default EventHandle;
