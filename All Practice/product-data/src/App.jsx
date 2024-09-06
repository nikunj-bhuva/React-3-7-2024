import AllProducts from "./Components/Allproducts";
import FilteredProduct from "./Components/Filteredproduct";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-5 bg-info text-light rounded-5">
        All Products
      </h1>
      <AllProducts />
      <FilteredProduct />
    </div>
  );
};

export default App;
