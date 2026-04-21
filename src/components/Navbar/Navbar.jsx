import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">

            {/* Left */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} className="btn btn-ghost lg:hidden">
                        ☰
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Contact</a></li>
                        <li>
                            <button onClick={() => navigate("/login")}>
                                Login
                            </button>
                        </li>
                    </ul>
                </div>

                <img className="w-24 md:w-32" src="/src/assets/logo.png" />
            </div>

            {/* Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4">
                    <li><a>Home</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            {/* Right */}
            <div className="navbar-end hidden lg:flex">
                <button
                    onClick={() => navigate("/login")}
                    className="btn bg-[#EF8411] text-white"
                >
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Navbar;