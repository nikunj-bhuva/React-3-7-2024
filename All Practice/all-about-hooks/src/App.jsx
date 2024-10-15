import ProductCounter from "./components/hooks/usestate/ProductCounter";
import Counter from "./components/hooks/usestate/Counter";
import BackgroundColors from "./components/hooks/usestate/BackgroundColors";
import State from "./components/hooks/usestate/State";
import LiftState from "./components/hooks/usestate/LiftState";
import FormControl from "./components/hooks/usestate/FormControl";
import ToggleSwitcher from "./components/hooks/usestate/ToggleSwitcher";

const App = () => {
  return (
    <div className="container">
      {/* <h1 className="text-center text-4xl mb-10 mt-10 bg-green-400 text-white font-bold p-3 rounded-full">
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
      <State /> */}
      {/* <h1 className="text-center text-4xl mb-16 mt-16 bg-green-400 text-white font-bold p-3 rounded-full">
        -: Lift State :-
      </h1>
      <LiftState /> */}
      {/* <h1 className="text-center text-4xl mb-16 mt-16 bg-zinc-500 text-white font-bold p-3 rounded-full">
        Form Control
      </h1>
      <FormControl /> */}
      <h1 className="text-center text-4xl mb-16 mt-16 bg-zinc-500 text-white font-bold p-3 rounded-full">
        Toggle Switcher
      </h1>
      <ToggleSwitcher />
    </div>
  );
};

export default App;
