import {Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="flex justify-center space-x-6 text-lg rounded-lg shadow-md py-6 my-4  font-semibold"  >
                <Link to={`/`}>Home</Link>
                <Link to={`/about`}>About</Link>
                <Link to={`/blog`}>Blog</Link>
                <Link to={`/contact`}>Contact</Link>
            </div>
        </div>
    )
}

export default Header;
