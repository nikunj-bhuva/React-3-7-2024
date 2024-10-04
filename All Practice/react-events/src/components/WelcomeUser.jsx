const WelcomeUser = ({ onClick, onMouseEnter }) => {
  const handleGrettings = () => {
    alert("hello good evening!");
  };

  return (
    <>
      <button onClick={onClick}>Click Me</button>
      <button onMouseEnter={() => onMouseEnter("nikunj")}>Hover Me</button>
      <button onClick={handleGrettings}>Greetings</button>
    </>
  );
};

export default WelcomeUser;
