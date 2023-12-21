import { Link, NavLink } from "react-router-dom";
import { } from "react-icons/fa";

const Navbar = () => {
    const navItems = <>
        <li><NavLink to="/"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Home</NavLink>
        </li>
        <li><NavLink to="/addTask"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Add Task</NavLink>
        </li>
        <li><NavLink to="/dashboard"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#F4AF00' : '',
                    borderBottom: isActive ? "2px solid #F4AF00" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Dashboard</NavLink>
        </li>
    </>
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-60 text-white max-w-screen-2xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">ToDo App</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {/* <div className="navbar-end">

                {
                    user ?
                        <div className="dropdown dropdown-end flex gap-5">
                            <li className=" hidden sm:block">
                                <Link to="MartPlace/addJob"
                                    className="btn btn-ghost normal-case bg-[#ff0061] text-white hover:bg-[#4e002d]"
                                ><FaPlus></FaPlus>Add Job</Link>
                            </li>
                            <label tabIndex={0} className="btn  bg-transparent flex">
                                <h2 className="font-light mr-2 rounded">{user?.displayName} </h2>
                                <img className="w-8 rounded-full " src={user?.photoURL ? user?.photoURL : avatar} alt="" />
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-4 shadow border-2 bg-neutral-500 text-white bg-blend-overlay rounded-box mt-14">
                                <li><button onClick={handleSignOut} className="btn btn-ghost  hover:bg-[#F4AF00] normal-case font-semibold">SignOut</button></li>
                            </ul>
                        </div> :
                        <div className=" flex justify-center gap-5">
                            <Link to="MartPlace/addJob"
                                className="btn btn-ghost normal-case bg-[#ff0061] text-white hover:bg-[#4e002d] "
                            ><FaPlus></FaPlus>Add Job</Link>
                            <Link to='/signIn' className="btn btn-ghost text-[#4e002d] normal-case font-semibold"><MdLogin></MdLogin> Login</Link>
                        </div>
                }
            </div> */}
        </div>
    );
};

export default Navbar;