import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  let searchingUsers = users.filter((user, idx, arr) => {
    return user.name.toLowerCase().includes(term.trim());
  });

  useEffect(() => {
    async function fetchData() {
      let fetchApi = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await fetchApi.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <input
        type="text"
        className="form-control w-25 fw-medium m-auto"
        id="exampleFormControlInput1"
        placeholder="searching..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div className="mt-3 fw-medium">
        {searchingUsers.length > 0 ? (
          searchingUsers.map((user) => {
            return (
              <p className="w-25 m-auto text-light mb-2" key={user.id}>
                {user.name}
              </p>
            );
          })
        ) : (
          <p className="fw-medium m-auto w-25 text-light">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Users;
