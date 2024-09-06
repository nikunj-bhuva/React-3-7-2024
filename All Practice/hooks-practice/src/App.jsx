import { useState } from "react";
import Counter from "./Components/Counter";
import ProductCounter from "./Components/Productcounter";
import BackgroundChanger from "./Components/Backgroundchanger";

const App = () => {
  const commonClasses =
    "text-center bg-warning p-2 rounded-5 text-white fw-bolder mb-5 mt-5";

  return (
    <div className="container">
      <h1 className={commonClasses}>Counter</h1>
      <Counter />
      <h1 className={commonClasses}>Products</h1>
      <ProductCounter />
      <h1 className={commonClasses}>Background Changer</h1>
      <BackgroundChanger />
    </div>
  );
};

export default App;
