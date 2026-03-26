import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allbooks'>All Books</NavLink></li>
        <li><NavLink to='/listed-books'>Listed Books</NavLink></li>
        <li><NavLink to='/pages-to-read'>Pages to Read</NavLink></li>
        <li><a href="#footer">Contact</a></li>
    </>
    return (
            <div className="navbar w-11/12 md:w-10/12 lg:w-10/12 mx-auto px-0 py-6">
                <div className="navbar-start gap-2 lg:gap-0">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 space-y-3">
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/' className="text-2xl font-extrabold">Book Vibe</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <ThemeToggle></ThemeToggle>
                </div>
            </div>
    );
};

export default Header;