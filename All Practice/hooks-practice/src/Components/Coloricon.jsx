const ColorIcon = ({ icon, path, onClick }) => {
  return (
    <svg
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className={icon}
      viewBox="0 0 16 16"
      onClick={onClick}
    >
      <path d={path} />
    </svg>
  );
};

export default ColorIcon;
