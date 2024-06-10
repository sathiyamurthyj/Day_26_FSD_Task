import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";
const Layout = () => {

    return (
        <>
            <div className="container-fluid">
                <ul className="nav justify-content-center" id="navbar">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">All</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/fsd" className="nav-link ">Full Stack Development</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/datascience" className="nav-link ">Data Science</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/cybersecurity" className="nav-link">Cyber Security</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/career" className="nav-link">Career</NavLink>
                    </li>                    
                </ul>
            </div>
            <hr />  
            <Outlet />          
        </>
    )
}

export default Layout;