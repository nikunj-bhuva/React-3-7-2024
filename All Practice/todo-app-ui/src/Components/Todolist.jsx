const Todolist = (props) => {
  console.log(props);
  return (
    <>
      <div className="col-sm-6 p-0">
        <p>{props.list}</p>
      </div>
      <div className="col-sm-4 p-0">
        <p>4/10/2023</p>
      </div>
      <div className="col-sm-2 p-0">
        <button
          type="button"
          className="btn btn-danger ps-0 pe-0"
          style={{ width: "60px" }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Todolist;
