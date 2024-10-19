import CounterApp from "./components/CounterApp.jsx";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4 bg-warning text-white p-2 rounded-5 fw-bolder">
        Counter App
      </h1>
      <CounterApp />
    </div>
  );
};

export default App;
