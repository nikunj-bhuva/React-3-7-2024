import Counter from "./components/hooks/usestatehook/Counter";

const App = () => {
  return (
    <div className="container">
      <h1 className="bg-dark text-white text-center rounded-5 mt-5 p-2">
        Counter With Use State Hook
        </h1>
      <div className="counter d-flex justify-content-center mt-5 bg-dark rounded-5 p-5 text-white">
        <Counter />
      </div>
    </div>
  );
};

export default App;
