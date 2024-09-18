import SearchingData from "./components/SearchingData";

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="mb-4 text-center bg-info mt-5 rounded-5 p-3">
          Search Your Products
        </h1>
        <SearchingData />
      </div>
    </>
  );
};

export default App;
