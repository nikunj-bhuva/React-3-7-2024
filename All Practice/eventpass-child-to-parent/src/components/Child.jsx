const Child = ({ onClick, onMouseOver }) => {
  // debugger;

  const handleChildButton = (userName) => {
    alert(`Hello ${userName} You clicked Child Button Successfully`);
  };

  return (
    <>
      <button className="btn btn-danger mx-5 mt-5" onClick={onClick}>
        Click Me
      </button>
      <button className="btn btn-danger mx-5 mt-5" onMouseEnter={onMouseOver}>
        Mouse Enter
      </button>
      <button
        className="btn btn-danger mx-5 mt-5"
        onClick={() => handleChildButton("nikunj")}
      >
        Click Me
      </button>
    </>
  );
};

export default Child;
