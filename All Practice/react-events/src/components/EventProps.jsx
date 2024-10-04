import WelcomeUser from "./WelcomeUser";

const EventProps = () => {

  const handleHoverMessage = (userName) => {
    alert(`Hello ${userName} Welcome!`);
  };

  return (
    <WelcomeUser
      onClick={() => alert("event pass sucessfully!")}
      onMouseEnter={handleHoverMessage}
    />
  );
};

export default EventProps;
