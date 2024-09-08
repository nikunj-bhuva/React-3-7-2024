import TodoApp from "./components/TodoApp";
import "../src/App.css";

const App = () => {
  return (
    <div className="container">
      <div className="row bg-success shadow-lg mt-5 rounded-5 pb-5">
        <h1 className="text-center mt-5 mb-5 bg-dark-subtle rounded-5 p-2">
          Todo App
        </h1>
        <TodoApp />
      </div>
    </div>
  );
};

export default App;
