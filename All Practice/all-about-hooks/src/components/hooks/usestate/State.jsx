import { useState } from "react";

const State = () => {
  const [data, setData] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Angles", age: 45 },
  ]);

  return (
    <>
      <h1 className="text-center font-bold bg-blue-500 text-white p-3 rounded-full text-3xl">
        Users List :-
      </h1>
      <ul>
        {data.map((user, id) => (
          <li key={id}>
            <p className="font-bold">{user.name}</p>
            <p className="font-bold">{user.age}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default State;
