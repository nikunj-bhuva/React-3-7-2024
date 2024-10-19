const UserList = ({
  firstName,
  lastName,
  email,
  mobileNumber,
  password,
  fName,
  lName,
  mail,
  number,
  passWord,
  dateOfBirth,
  dob,
}) => {
  return (
    <span className="p-3 text-white font-bold italic">
      {firstName}
      <mark>{fName}</mark>
      {lastName}
      <mark>{lName}</mark>
      {email}
      <mark>{mail}</mark>
      {mobileNumber}
      <mark>{number}</mark>
      {password}
      <mark>{passWord}</mark>
      {dateOfBirth}
      <mark>{dob}</mark>
    </span>
  );
};

export default UserList;
