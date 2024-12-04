import { Routes } from "react-router";
import { Route } from "react-router";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
