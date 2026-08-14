const badgeStyles={
    active: "bg-green-500",
    completed: "bg-blue-500",
    pending: "bg-yellow-500",
    progress: "bg-purple-500",
};
function Badge(props){
    return (
        <span className={"text-white px-2 py-1 rounded-full text-sm " + badgeStyles[props.status]}>
            {props.text}
        </span>
        );
    }

export default Badge;