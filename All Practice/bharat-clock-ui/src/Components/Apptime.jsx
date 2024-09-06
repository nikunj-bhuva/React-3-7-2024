const Apptime = () => {
  let date = new Date();
  console.log(date);
  return (
    <p className="text-center fs-3">
      This is the current time:- {date.toLocaleDateString()}-
      {date.toLocaleTimeString()}
    </p>
  );
};

export default Apptime;
