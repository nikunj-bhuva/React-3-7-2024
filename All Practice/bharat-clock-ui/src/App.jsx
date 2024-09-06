import Appslogan from "./Components/Appslogan";
import Apptime from "./Components/Apptime";
import Apptitle from "./Components/Apptitle";

const App = () => {
  return (
    <div className="container">
      <div className="box shadow mt-5 p-4 rounded-5">
        <Apptitle />
        <Appslogan />
        <Apptime />
      </div>
    </div>
  );
};

export default App;
