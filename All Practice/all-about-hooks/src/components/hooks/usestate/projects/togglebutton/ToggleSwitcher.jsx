import { useState } from "react";
import styles from "./ToggleSwitcher.module.css";

const ToggleSwitcher = () => {
  // initial state value of isOn //

  const [isOn, setIsOn] = useState(false);

  // function to handle toggle switch //

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`${
        isOn ? styles["toggle-switch-on"] : styles["toggle-switch"]
      }`}
      onClick={handleToggleSwitch}
    >
      <div className={`${isOn ? styles["switch-on"] : styles["switch-off"]}`}>
        <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};

export default ToggleSwitcher;
