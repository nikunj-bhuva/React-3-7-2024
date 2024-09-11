const InputValue = ({ inputValue, setInputValue }) => {
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mb-3 mt-5 w-50 m-auto">
      <input
        type="text"
        className="form-control fw-medium"
        id="formGroupExampleInput"
        placeholder="enter your value"
        value={inputValue}
        onChange={handleInput}
      ></input>
    </div>
  );
};

export default InputValue;
