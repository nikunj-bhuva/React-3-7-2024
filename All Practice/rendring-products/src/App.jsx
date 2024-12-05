import RenderProducts from "./components/RenderProducts";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5 bg-info-subtle p-2 rounded-5">All Products</h1>
      <RenderProducts />
    </div>
  );
};

export default App;
