import Backgroundcolor from "./Component/Backgroundcolor";
import Productcard from "./Component/Productcard";

function App() {
  return (
    <div className="container-fluied">
      <h1 className="mt-4 text-center bg-warning mb-5 text-uppercase text-dark rounded-5">Product Cards</h1>
      <Productcard></Productcard>
      <Backgroundcolor></Backgroundcolor>
    </div>
  );
}

export default App;
