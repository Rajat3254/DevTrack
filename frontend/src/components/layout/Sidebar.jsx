import {NavLink} from "react-router-dom";
import "../../styles/Sidebar.css";
function Sidebar() {
    return (
        <div className="sidebar">
        <NavLink to="/" className={({isActive}) =>(isActive?"active":"link")}>Dashboard</NavLink>
        <NavLink to="/projects" className={({isActive}) =>(isActive?"active":"link")}>Projects</NavLink>
        <NavLink to="/tasks" className={({isActive}) =>(isActive?"active":"link")}>Tasks</NavLink>
        </div>
        );
    }
export default Sidebar;