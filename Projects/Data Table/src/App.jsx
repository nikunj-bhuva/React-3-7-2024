import SearchingData from "./components/SearchingData";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="bg-primary p-4 text-white text-center rounded-3">
        <h1>Product Search & Sort</h1>
      </header>

      <SearchingData />

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>© 2024 My E-commerce Site</p>
      </footer>
    </div>
  );
};

export default App;
