import { AuthContext } from "context/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../buttons/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
  };
  return (
    <div className="navbar">
      {isAuth && <MyButton onClick={logout}>Logout</MyButton>}
      <div className="navbar__links">
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
