import CheckGender from "./Components/Checkgender";
import Checkgrade from "./Components/Checkgrade";
import Conditional from "./Components/Conditional";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-5 rounded-5 bg-info-subtle">Drive</h1>
      <Conditional />
      {/* <CheckGender /> */}
      <Checkgrade />
    </div>
  );
};

export default App;
