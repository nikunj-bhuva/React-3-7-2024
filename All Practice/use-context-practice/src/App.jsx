import { createContext, useState } from "react";
import Child from "./Components/Child";
export let Context = createContext("Nikunj");

const App = () => {
  let [studentName, setStudentName] = useState("Nikunj");
  let [rollNo, setRollNo] = useState(1234);

  function onUpdate() {
    setStudentName("keyur");
    setRollNo(5555);
  }

  return (
    <>
      <div className="container">
        <Context.Provider value={{ studentName, rollNo, onUpdate }}>
          <Child />
        </Context.Provider>
      </div>
    </>
  );
};
export default App;
