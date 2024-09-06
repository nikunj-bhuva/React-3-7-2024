import styles from "../Components/UserInformation.module.css";
import UserValues from "./UserValues";

const UserInformation = ({
  firstValue,
  lastValue,
  emailValue,
  passwordValue,
  mobileValue,
}) => {
  return (
    <div
      className={`${styles.users} bg-primary-subtle w-75 mt-4 rounded-4 m-auto p-2`}
    >
      <h3 className="text-center pt-3 fw-bold">User Details:-</h3>
      <UserValues value={`First Name : ${firstValue}`} />
      <UserValues value={`Last Name : ${lastValue}`} />
      <UserValues value={`Email : ${emailValue}`} />
      <UserValues value={`Password : ${passwordValue}`} />
      <UserValues value={`Mobile Number : ${mobileValue}`} />
    </div>
  );
};

export default UserInformation;
