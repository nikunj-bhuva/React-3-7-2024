const InputField = ({
  title,
  htmlFor,
  type,
  autocomplete,
  placeholder,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-5">
      <label htmlFor={htmlFor}>{title}</label>
      <input
        className="border border-2 border-stone-950 rounded bg-slate-100 font-medium p-1"
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autocomplete}
        required
      />
    </div>
  );
};

export default InputField;
