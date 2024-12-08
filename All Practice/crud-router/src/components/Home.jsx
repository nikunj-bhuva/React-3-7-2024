import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/userData").then((response) => {
      let { data } = response;
      setUserData(data);
    });
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:3000/userData/${userId}`)
      .then((response) => {
        console.log(response);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className="text-center m-4 bg-dark-subtle">:- List Of Users :-</h1>
      <Link to="/create">
        <button>Create</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td scope="row">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update/${user.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <Link to={`/read/${user.id}`}>
                  <button>Read</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
