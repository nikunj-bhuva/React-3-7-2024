import EventPropogation from "./EventPropagation";
import EventHandle from "./components/EventHandle";
import "../src/App.css" ;

const App = () => {
  return (
    <div className="container">
      {/* <EventHandle /> */}
      <EventPropogation />
    </div>
  );
};

export default App;
