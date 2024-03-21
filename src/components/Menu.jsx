import { Link } from "react-router-dom";
const Menu = ({ props }) => {
    return (
        <>
            <nav className={`flex gap-8 max-md:gap-2 max-md:p-4  ${props}`} >
                <Link to="/">Home</Link>
                <Link to="/CitiesPage">Cities</Link>
                <Link to="/Register">Register</Link>
                <Link to="/Login">Login</Link>
            </nav>
        </>
    );
};

export default Menu;