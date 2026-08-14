function Input(props){
    return (
        <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="border border-gray-300 rounded-lg p-2 w-full"
        />
        );
    }
export default Input;