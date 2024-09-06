const InputField = ({ labelValue, placeHolderValue, onInput, value }) => {
  return (
    <div className="mb-3">
      <label className="form-label text-white fw-medium ps-1">
        {labelValue}
      </label>
      <input
        type="text"
        className="form-control fw-medium"
        value={value}
        id="formGroupExampleInput"
        placeholder={placeHolderValue}
        onInput={onInput}
      />
    </div>
  );
};

export default InputField;
