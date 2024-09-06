const Drive = ({ age, allow }) => {
  return (
    <h3 className="text-center bg-dark-subtle p-4 rounded-5">
      Your Age Is {age}. You {allow} Drive.
    </h3>
  );
};

export default Drive;
