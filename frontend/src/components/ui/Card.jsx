function Card(props) {
    return (
        <div className="bg-gray-500 border border-gray-300 rounded-lg p-4">
        {props.children}
        </div>
    );
    }
export default Card;