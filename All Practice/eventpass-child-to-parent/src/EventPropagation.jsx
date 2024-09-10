const EventPropogation = () => {
debugger
  const handleGrandParentDiv = () => {
    console.log("clicked in grand parent div");
  };

  const handleParentDiv = (e) => {
    // e.stopPropagation();
    console.log("clicked in parent div");
  };

  const handleChildDiv = (e) => {
    // e.stopPropagation();
    console.log("clicked in child div");
  };

  const handleChildBtn = (e) => {
    // e.stopPropagation();
    console.log("clicked in child button");
  };

  return (
    <div className="box">
      <div
        className="grand-parent m-auto border border-2 border-dark"
        onClickCapture={handleGrandParentDiv}
      >
        <div
          className="parent border border-2 border-dark m-auto mt-3"
          onClickCapture={handleParentDiv}
        >
          <div
            className="child border border-2 border-dark m-auto mt-3 text-center align-content-center text-white"
            onClickCapture={handleChildDiv}
          >
            <button
              className="btn btn-info fw-bolder"
              onClickCapture={handleChildBtn}
            >
              Child
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPropogation;
