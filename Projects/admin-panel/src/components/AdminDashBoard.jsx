import Header from "./Header";
import SideBar from "./SideBar";
import UserManagement from "./UserManagement";

const AdminDashBoard = () => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <SideBar />
      <div className="flex-grow-1">
        <Header />
        <div className="container-fluid mt-4">
          <UserManagement />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
