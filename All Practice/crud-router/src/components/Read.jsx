import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [singleUser, setSingelUser] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    axios(`http://localhost:3000/userData/${userId}`)
      .then((response) => {
        let { data } = response;
        setSingelUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let { name, email } = singleUser;

  return (
    <>
      <div className="users">
        <h1 className="text-center m-4 bg-danger">:- User Details :-</h1>
        <span className="d-block fs-2 fw-medium ms-4 mb-3">Name:- {name}</span>
        <span className="d-block fs-2 fw-medium ms-4 mb-3">
          Email:- {email}
        </span>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </>
  );
};

export default Read;
