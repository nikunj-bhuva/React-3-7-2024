import Todolist from "./Todolist";

const Todoapp = () => {
  return (
    <>
      <h1 className="text-center mt-3">Todo App</h1>
      <div className="row mt-5 d-flex row-gap-3">
        <div className="col-sm-6 p-0">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div className="col-sm-4 p-0">
          <input type="date" />
        </div>
        <div className="col-sm-2 p-0">
          <button
            type="button"
            className="btn btn-success"
            style={{ width: "60px" }}
          >
            Add
          </button>
        </div>
        <Todolist list="Buy Milk" />
        <Todolist list="Go To College" />
      </div>
    </>
  );
};

export default Todoapp;
