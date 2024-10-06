import Counter from "./components/hooks/usestate/Counter";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center text-4xl mb-10 mt-10 bg-green-400 text-white font-bold p-3 rounded-full">-: Counter :-</h1>
      <Counter />
    </div>
  );
};

export default App;
