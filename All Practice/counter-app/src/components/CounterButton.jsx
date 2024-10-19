const CounterButton = ({ value, onClick }) => {
  return (
    <button className="btn btn-dark fw-bolder fs-3" onClick={onClick}>
      {value}
    </button>
  );
};

export default CounterButton;
