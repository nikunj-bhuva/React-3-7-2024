import CalcBtn from "./Components/Calcbtn";
import CalcInput from "./Components/calcInput";

const App = () => {
  return (
    <div className="container">
      <div
        className="parent border border-3 border-dark-subtle m-auto p-3 rounded-5 bg-white shadow-lg mt-5 mb-5"
        style={{ width: "40%", height: "auto" }}
      >
        <CalcInput />
        <div className="row text-center g-3 mt-3">
          <CalcBtn value="C" />
          <CalcBtn value="1" />
          <CalcBtn value="2" />
          <CalcBtn value="+" />
          <CalcBtn value="3" />
          <CalcBtn value="4" />
          <CalcBtn value="-" />
          <CalcBtn value="5" />
          <CalcBtn value="6" />
          <CalcBtn value="*" />
          <CalcBtn value="7" />
          <CalcBtn value="8" />
          <CalcBtn value="/" />
          <CalcBtn value="=" />
          <CalcBtn value="9" />
          <CalcBtn value="0" />
        </div>
      </div>
    </div>
  );
};

export default App;
