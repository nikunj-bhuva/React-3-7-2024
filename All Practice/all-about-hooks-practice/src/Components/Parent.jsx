import Child from "./Child";

const Parent = () => {
  return (
    <>
      <div className="text-center bg-info-subtle p-3 m-0">
        <h1>-:Parent Component:-</h1>
        <Child />
      </div>
    </>
  );
};

export default Parent;
