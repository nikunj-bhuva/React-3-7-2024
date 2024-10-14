import UserList from "./UserList";

const UserData = ({
  firstName,
  lastName,
  email,
  mobileNumber,
  password,
  dateOfBirth,
}) => {
  return (
    <div className="parent">
      <h1 className="text-center text-4xl mb-16 mt-10 bg-zinc-500 text-white font-bold p-3 rounded-full">
        -: User Data :-
      </h1>
      <div className="child bg-slate-500 flex flex-col rounded-2xl p-2">
        <UserList firstName="First Name : " fName={firstName} />
        <UserList lastName="Last Name : " lName={lastName} />
        <UserList email="E-mail : " mail={email} />
        <UserList mobileNumber="Mobile Number : " number={mobileNumber} />
        <UserList password="Password : " passWord={password} />
        <UserList dateOfBirth="Date Of Birth : " dob={dateOfBirth} />
      </div>
    </div>
  );
};

export default UserData;
