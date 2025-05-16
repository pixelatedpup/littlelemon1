import { NavLink } from "react-router-dom";

const Nav = () =>{
    return (
        <nav>
            <ul>
                <li><NavLink to="/" id="link-item">Home</NavLink></li>
                <li><a id ="link-item" href="#about">About</a></li>
                <li><a id ="link-item"  href="#menu">Menu</a></li>
                <li><NavLink to="/booking" id="link-item">Reservation</NavLink></li>
                <li><a id ="link-item"  href="#orderonline">Order Online</a></li>
                <li><a id ="link-item"  href="#login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;