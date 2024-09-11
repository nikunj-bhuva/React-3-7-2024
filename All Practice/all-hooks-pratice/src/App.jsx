import Counter from "./components/hooks/usestatehook/Counter";
import LiftingStateUp from "./components/hooks/usestatehook/LiftingStateUp";

const App = () => {
  const commanClasses = `bg-dark text-white text-center rounded-5 mt-5 p-2`;

  return (
    <div className="container">
      <h1 className={`${commanClasses}`}>Counter With Use State Hook</h1>
      <Counter />
      <h1 className={`${commanClasses}`}>Lifting State Up In React</h1>
      <div className="">
        <LiftingStateUp />
      </div>
    </div>
  );
};

export default App;
