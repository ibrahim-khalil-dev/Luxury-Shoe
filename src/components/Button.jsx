const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center padding-hi border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor} rounded-full`
          : "bg-[#FF6452] rounded-full text-white border-[#FF6452]"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconUrl}
          alt="arrow right"
        />
      )}
    </button>
  );
};

export default Button;
