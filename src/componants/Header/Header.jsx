import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="flex justify-center space-x-6 text-lg rounded-lg shadow-md py-6 my-4 font-semibold">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'underline text-red-500' : 'text-green-500'}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? 'underline text-red-500' : 'text-green-500'}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/blog" 
                    className={({ isActive }) => isActive ? 'underline text-red-500' : 'text-green-500'}
                >
                    Blog
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? 'underline text-red-500' : 'text-green-500'}
                >
                    Contact
                </NavLink>
                <NavLink 
                    to="/posts" 
                    className={({ isActive }) => isActive ? 'underline text-red-500' : 'text-green-500'}
                >
                    Posts
                </NavLink>
                <NavLink 
                    to="/photos" 
                    className={({ isActive }) => isActive ? 'underline text-red-500' : 'text-green-500'}
                >
                    Photos
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
