import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        paddingBlock: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? "red" : "white" })}
        to={"/contact"}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;

// https://www.jumia.com.gh/digital-satellite-hd-tv-32-black-e-life-mpg458468.html
