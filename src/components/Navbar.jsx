import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header flex items-center justify-between px-4 py-2 bg-gray-100">
            {/* Logo */}
            <NavLink
                to="/"
                className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
            >
                <p className="blue-gradient_text">IV</p>
            </NavLink>

            {/* Navigation Links */}
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500" : "text-black"
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500" : "text-black"
                    }
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive ? "text-blue-500" : "text-black"
                    }
                >
                    Home
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
