import ToggleSwitcher from "./components/ToggleSwitcher";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center bg-info p-3 mt-5 mb-5 rounded-5 text-white fw-bold">
        Toggle Switcher
      </h1>
      <div>
        <ToggleSwitcher />
      </div>
    </div>
  );
};

export default App;
