import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import EmptyMessage from "./EmptyMessage";

const Update = () => {
  const [updateData, setUpdateData] = useState({ name: "", email: "" });
  let { name, email } = updateData;
  const [errorMsg, setErrorMsg] = useState({
    userName: false,
    userEmail: false,
  });
  let { userName, userEmail } = errorMsg;
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let newError = { userName: !name, userEmail: !email };
    let { userName, userEmail } = newError;
    if (userName || userEmail) {
      setErrorMsg(newError);
    } else {
      let updateObj = { name, email };
      axios
        .put(`http://localhost:3000/userData/${userId}`, updateObj)
        .then((response) => {
          console.log(response);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
      setErrorMsg(newError);
      setUpdateData({ name: "", email: "" });
    }
  };

  useEffect(() => {
    axios(`http://localhost:3000/userData/${userId}`).then((response) => {
      let { data } = response;
      setUpdateData(data);
    });
  }, []);

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
            value={name}
            placeholder="Enter your name"
            required
            onChange={(e) =>
              setUpdateData({
                ...updateData,
                name: e.target.value,
              })
            }
          />
          {userName && <EmptyMessage message="please enter your Name!" />}
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
            value={email}
            placeholder="Enter your email"
            required
            onChange={(e) =>
              setUpdateData({ ...updateData, email: e.target.value })
            }
          />
          {userEmail && <EmptyMessage message="please enter your Email!" />}
        </div>
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Update;
