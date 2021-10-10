import React from "react";
import { useHover } from "../customHooks";
import { animated } from "react-spring";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import UserBar from "./UserBar";
import logo from "../images/wipeLacer.png";

const NavBar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogOut = async () => {
    await logout();
  };

  const [animation, setHovered] = useHover({
    backgroundFrom: "#282C34",
    backgroundTo: "white"
  });
  const [animation2, setHovered2] = useHover({
    backgroundFrom: "#282C34",
    backgroundTo: "white"
  });

  const AnimatedLink = animated(Link);

  return (
    <div className="NavBar">
      <div className="contained">
        <Link to="/">
          <img src={logo} alt="logo" height="70" />
        </Link>
        {currentUser ? (
          <UserBar user={currentUser} handleLogOut={handleLogOut} />
        ) : (
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "20px" }}
            className="buttons"
          >
            <AnimatedLink
              style={animation2}
              onMouseOver={() => {
                setHovered2(true);
              }}
              onMouseOut={() => {
                setHovered2(false);
              }}
              to="/login"
            >
              Log In
            </AnimatedLink>
            <AnimatedLink
              style={animation}
              onMouseOver={() => {
                setHovered(true);
              }}
              onMouseOut={() => {
                setHovered(false);
              }}
              to="/signup"
            >
              Sign up
            </AnimatedLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
