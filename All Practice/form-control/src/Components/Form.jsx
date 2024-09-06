const Form = ({ firstName, id, value, type, onChange }) => {
  return (
    <div className="mb-3 px-4 pt-2">
      <label className="form-label fw-medium ps-2">{firstName}</label>
      <input
        type={type}
        className="form-control rounded-5 border border-1 border-primary-subtle"
        id={id}
        placeholder={value}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default Form;
