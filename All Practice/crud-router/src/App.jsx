import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

const App = () => {
  // debugger;
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:userId" element={<Read />} />
        <Route path="/update/:userId" element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;
