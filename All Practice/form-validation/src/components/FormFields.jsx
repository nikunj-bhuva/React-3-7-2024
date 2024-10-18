const FormFields = ({
  title,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-medium">
        {title}
      </label>
      <input
        type={type}
        className="form-control fw-medium"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormFields;
