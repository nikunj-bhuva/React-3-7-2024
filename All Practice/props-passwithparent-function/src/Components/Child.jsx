const Child = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1 className="text-center">My First Child Component h1.</h1>
      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => {
            data();
          }}
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default Child;
