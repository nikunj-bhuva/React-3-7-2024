import { useState } from "react";

const ControlledComp = () => {
  const [name, setName] = useState("");

  return (
    <div className="text-center">
      <input
        className="fw-medium"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />
      <p className="fw-medium mt-4">{name}</p>
    </div>
  );
};

export default ControlledComp;
