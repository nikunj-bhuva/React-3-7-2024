import Backgroundcolor from "./Component/Backgroundcolor";
import ProductCounter from "./Component/ProductCounter";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-center text-4xl mb-16 mt-16 bg-gradient-to-r from-green-400 to-teal-500 text-white font-extrabold p-6 rounded-lg shadow-lg">
        -: All Products :-
      </h1>
      <ProductCounter />
    </div>
  );
}

export default App;
