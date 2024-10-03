const EventHandler = () => {
  const handleClick = (e) => {
    console.log(e.type);
    console.log(e.target);
    alert("hello this is onclick event");
  };

  const handleWelcomeUserMessage = (e) => {
    console.log(e);
    alert(`Hello Welcome To Our Website!`);
  };

  return (
    <>
      <h1>Events In React</h1>
      {/* using Function Named */}
      <button onClick={handleClick}>Click Me</button>
      {/* using inline event function */}
      <button onClick={() => alert("hello this is inline event")}>
        Click Me
      </button>
      {/* call back function as a onclick event and passing arguments to welcomeusermessage function */}
      <button onClick={(e) => handleWelcomeUserMessage(e)}>
        Click Me
      </button>
    </>
  );
};

export default EventHandler;
