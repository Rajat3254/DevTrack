const buttonStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white"
};
function Button({text,variant="primary"}) {
    return (
        <button className={"px-4 py-2 rounded-lg " + buttonStyles[variant]
                }>{text}</button>
        );
    }
export default Button;