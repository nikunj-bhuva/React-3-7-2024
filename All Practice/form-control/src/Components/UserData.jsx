import { useContext } from "react";
import UserValue from "./UserValue";
import { UserValueContext } from "./UserValueContext";

const UserData = () => {
  const { firstName, secondName, userEmail, userPassword, userMobile } =
    useContext(UserValueContext);

  return (
    <div className="bg-dark-subtle p-5 d-flex flex-column fw-medium rounded-5">
      <h1 className="text-center mb-4">:-User Data-:</h1>
      <UserValue value={`First Name : ${firstName.toUpperCase()}`} />
      <UserValue value={`Last Name : ${secondName.toUpperCase()}`} />
      <UserValue value={`Email : ${userEmail.toUpperCase()}`} />
      <UserValue value={`Password : ${userPassword.toUpperCase()}`} />
      <UserValue value={`Mobile Number : ${userMobile.toUpperCase()}`} />
    </div>
  );
};

export default UserData;
