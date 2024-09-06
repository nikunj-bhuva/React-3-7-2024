const FoodInput = ({ changeInput }) => {
  // console.log(changeInput);
  return (
    <input
      type="text"
      placeholder="enter Your Food Items"
      className="w-50 mb-3 p-2 rounded-5 border border-2 border-dark fw-medium bg-info-subtle"
      onKeyDown={changeInput}
    />
  );
};

export default FoodInput;
