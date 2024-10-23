import ControlledComp from "./components/ControlledComp";
import UnControlledComp from "./components/UnControlledComp";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-4 bg-danger p-2 text-white rounded-5">
        Conrolled & Uncontrolled Components
      </h1>
      <h2 className="text-center mt-5 mb-4 bg-dark p-2 text-white rounded-5">
        Conrolled Component
      </h2>
      <ControlledComp />
      <h3 className="text-center mt-5 mb-4 bg-dark p-2 text-white rounded-5">
        Uncontrolled Component
      </h3>
      <UnControlledComp />
    </div>
  );
};

export default App;
