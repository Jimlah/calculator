const Button = ({
  addedStyle = "hover:bg-gray-500",
  value,
  name,
  handleClick = () => {},
}) => {
  return (
    <button
      id={name}
      className={`w-20 h-20 text-lg text-white rounded-sm ${addedStyle} rounded-full`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
