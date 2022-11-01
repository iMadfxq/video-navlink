import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
    <nav>
      <NavLink to="/home" className={({isActive}) => isActive ? 'grape' : undefined}>Home</NavLink>
      <NavLink to="/about" style={({isActive}) => isActive ? {'font-size' : '5px'} : undefined}>About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
    <Outlet/>
    </>
  );
}
