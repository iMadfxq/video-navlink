import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    <Outlet/>
    </>
  );
}
