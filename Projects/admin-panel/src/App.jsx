import { Routes } from "react-router";
import { Route } from "react-router";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import AdminDashBoard from "./components/AdminDashBoard";
import UpdateUser from "./components/UpdateUser";
import UserManagement from "./components/UserManagement";
import ProductManageMent from "./components/ProductManageMent";
import UpdateProduct from "./components/UpdateProduct";
import ReadProducts from "./components/ReadProducts";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admindashboard/*" element={<AdminDashBoard />} />
      <Route path="/user" element={<UserManagement />} />
      <Route path="/edit/:userId" element={<UpdateUser />} />
      <Route path="/product" element={<ProductManageMent />} />
      <Route path="/readproduct/:pId" element={<ReadProducts />} />
      <Route path="/update/:productId" element={<UpdateProduct />} />
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  );
};

export default App;
