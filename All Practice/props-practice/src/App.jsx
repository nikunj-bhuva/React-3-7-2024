import NetFlixCard from "./components/NetFlixCard";

const App = () => {
  // debugger
  return (
    <div className="container">
      <div className="row gap-4">
        <NetFlixCard />
        <NetFlixCard />
        <NetFlixCard />
        <NetFlixCard />
      </div>
    </div>
  );
};

export default App;
