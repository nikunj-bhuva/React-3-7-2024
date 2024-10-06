import ProductCounter from "./components/hooks/usestate/ProductCounter";
import Counter from "./components/hooks/usestate/Counter";
import BackgroundColors from "./components/hooks/usestate/BackgroundColors";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center text-4xl mb-10 mt-10 bg-green-400 text-white font-bold p-3 rounded-full">
        -: Counter :-
      </h1>
      <Counter />
      <h1 className="text-center text-4xl mb-16 mt-16 bg-green-400 text-white font-bold p-3 rounded-full">
        -: All Products :-
      </h1>
      <ProductCounter />
      <h1 className="text-center text-4xl mb-16 mt-16 bg-green-400 text-white font-bold p-3 rounded-full">
        -: BackGround Colors :-
      </h1>
      <BackgroundColors />
    </div>
  );
};

export default App;
