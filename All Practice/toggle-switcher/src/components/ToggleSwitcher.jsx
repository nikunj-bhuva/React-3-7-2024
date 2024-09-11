import { useState } from "react";

const ToggleSwitcher = () => {
  //import state from hooks //

  const [isOn, setIsOn] = useState(false); //initial state

  // handle toggle switch on/off function //

  const handleToggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      className={`${isOn ? "toggle-switch-on" : "toggle-switch-off"} m-auto`}
      onClick={handleToggleSwitch}
    >
      <div className={isOn ? "switch-btn-on" : "switch-btn-off"}>
        {isOn ? "ON" : "OFF"}
      </div>
    </div>
  );
};

export default ToggleSwitcher;
