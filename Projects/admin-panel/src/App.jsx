import { Routes } from "react-router";
import { Route } from "react-router";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import AdminDashBoard from "./components/AdminDashBoard";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admindashboard" element={<AdminDashBoard />} />
      <Route path="/edit/:userId" element={<UpdateUser />} />
    </Routes>
  );
};

export default App;
