import ProductRendering from "./components/ProductRendering";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5 bg-info rounded-5 p-3 text-light fw-bold">
        All Products
      </h1>
      <div className="row row-gap-4">
        <ProductRendering />
      </div>
    </div>
  );
};

export default App;
