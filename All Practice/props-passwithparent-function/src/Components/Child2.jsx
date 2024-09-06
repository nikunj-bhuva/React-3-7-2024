const Child2 = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1 className="text-center mt-5">My second child component</h1>
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

export default Child2;
