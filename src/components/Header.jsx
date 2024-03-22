
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/actions/userActions";

const Header = () => {
    const location = useLocation();
    const user = useSelector((store) => store.user.user);
    const dispatch = useDispatch();
  
    const links = [
      {
        path: "/",
        title: "Home",
        active: "/" == location.pathname,
        visible: true,
      },
      {
        path: "/CitiesPage",
        title: "Cities",
        active: "/CitiePage" == location.pathname,
        visible: true,
      },
      {
        path: "/Register",
        title: "Register",
        active: "/Register" == location.pathname,
        visible: user.first_name ? false : true,
      },
      {
        path: "/login",
        title: "Login",
        active: "/login" == location.pathname,
        visible: user.first_name ? false : true,
      },
    ];
  
    const handleClick = () => {
      dispatch(logout());
    };
    return (
      <header className="flex  w-full flex-row justify-around border-2 items-center sticky top-0 z-10 bg-white">
        <img className="h-12 flex self-center " src="/MyTinerariHeaderLogo.png" alt="Logo MyTinerari" />
        <nav className="flex gap-5">
          {links.map((link) => (
            <Anchor link={link} />
          ))}
  
          {user.first_name && (
            <button
              onClick={handleClick}
              className="bg-black text-white px-2 py-1 font-semibold rounded "
            >
              Logout
            </button>
          )}
        </nav>
      </header>
    );
  };
  
  const Anchor = ({ link }) => {
    if (link.visible) {
      return (
        <Link
          key={link.title}
          className={`font-semibold py-1 px-2 border rounded-lg ${
            link.active ? "bg-white text-black" : ""
          }`}
          to={link.path}
        >
          {" "}
          {link.title}{" "}
        </Link>
      );
    } else {
      <></>;
    }
  };
export default Header; 


