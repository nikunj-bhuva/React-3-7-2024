const ChildCounter = ({ Count }) => {
  console.log("child counter re-render with counter component");
  return (
    <h1 className="text-center mt-5 bg-dark p-2 text-light rounded-5">
      Child Counter :- {Count}
    </h1>
  );
};

export default ChildCounter;
