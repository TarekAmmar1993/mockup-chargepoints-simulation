type ButtonProps = {
  text: string;
  type: "submit" | "reset";
  onClick?: () => void;
  disabled: boolean;
  iconUrl: string;
};
const Button = ({ text, type, onClick, disabled, iconUrl }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`flex cursor-pointer justify-center gap-2 rounded-full px-4 py-3 text-sm whitespace-nowrap text-white transition active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400 ${type === "submit" ? "bg-green-600 hover:bg-green-800" : "bg-red-600 hover:bg-red-800"}`}
    >
      <div className="flex items-center">
        <img src={iconUrl} alt={`${type} icon`} height="16" width="16" />
      </div>
      <p className="text-xs lg:text-base">{text}</p>
    </button>
  );
};

export default Button;
