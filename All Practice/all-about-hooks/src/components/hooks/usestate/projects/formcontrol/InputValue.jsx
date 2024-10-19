const InputValue = ({ userValue, onChange }) => {
  return (
    <input
      className="border-2 border-solid border-slate-950 rounded p-1 bg-[#ecebff] text-slate-950 placeholder-black"
      type="text"
      placeholder="enter your name"
      value={userValue}
      onChange={onChange}
    />
  );
};

export default InputValue;
