import Child from "./Components/Child";
import Child2 from "./Components/Child2";

const App = () => {
  debugger
  const parentData = () => {
    alert("call the parent app function");
  };

  return (
    <>
      <Child data={parentData}></Child>
      <Child2 data={parentData}></Child2>
    </>
  );
};

export default App;
