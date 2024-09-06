import { useState } from "react";
import Apptitle from "./Components/Apptitle";
import Errormsg from "./Components/Errormsg";
import Fooditem from "./Components/Fooditem";

const App = () => {
  const [foodItems, setFoodItems] = useState([
    "Dal",
    "Green Vegetable",
    "Roti",
  ]);

  const addFoodItems = (item) => {
    setFoodItems(item);
  };

  const handlerBtn = (item) => {
    console.log(item);
  };

  return (
    <div className="container">
      <Apptitle />
      {foodItems.length === 0 ? (
        <Errormsg />
      ) : (
        <Fooditem
          data={foodItems}
          itemMsg={handlerBtn}
          addItem={addFoodItems}
        />
      )}
    </div>
  );
};

export default App;
