const Button = ({
  addedStyle = "hover:bg-gray-500",
  value,
  name,
  handleClick = () => {},
}) => {
  return (
    <button
      id={name}
      className={`w-10 h-10 text-white rounded-sm ${addedStyle} rounded-full`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
