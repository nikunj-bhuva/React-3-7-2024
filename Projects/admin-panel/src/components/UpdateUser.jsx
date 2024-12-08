const UpdateUser = () => {
  return (
    <>
      <h1 className="text-center mt-5 mb-5 bg-danger">-: Update User :-</h1>
      <form action="">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-medium"
          >
            Name:-
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value=""
            placeholder="Enter your name"
            required
          />
          {/* {userName && <EmptyMessage message="please enter your Name!" />} */}
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label fw-medium"
          >
            Email:-
          </label>
          <input
            type="e-mail"
            className="form-control"
            id="exampleFormControlInput2"
            value=""
            placeholder="Enter your email"
            required
          />
          {/* {userEmail && <EmptyMessage message="please enter your Email!" />} */}
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default UpdateUser;
