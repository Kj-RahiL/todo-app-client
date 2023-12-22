import { Link, NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navItems = <>
        <li><NavLink to="/"
            style={({ isActive }) => {
                return {
                    color: isActive ? '#8dff0bf2' : '',
                    borderBottom: isActive ? "2px solid #8dff0bf2" : "black",
                    fontWeight: isActive ? "bold" : "",
                    background: isActive ? "none" : '',
                };
            }}>Home</NavLink>
        </li>

        {
            !user ? <>
                <li><NavLink to="/addTask"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#8dff0bf2' : '',
                            borderBottom: isActive ? "2px solid #8dff0bf2" : "black",
                            fontWeight: isActive ? "bold" : "",
                            background: isActive ? "none" : '',
                        };
                    }}>Add Task</NavLink>
                </li>

            </> : <>
                <li><NavLink to="/dashboard/taskManager"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? '#8dff0bf2' : '',
                            borderBottom: isActive ? "2px solid #8dff0bf2" : "black",
                            fontWeight: isActive ? "bold" : "",
                            background: isActive ? "none" : '',
                        };
                    }}>Dashboard</NavLink>
                </li>
            </>
        }



    </>

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('logout successfully', {
                    position: 'top-center',
                    autoClose: 1500
                })
            })
            .catch(error => {
                console.error(error)
                toast.error('LogOut Failed.!!')
            })
    }
    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-60  text-white max-w-screen-2xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent/40 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-[#8dff0bf2]">ToDo App</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    <li className=" hidden sm:block mr-3">
                        <Link to="addTask"
                            className="btn btn-ghost normal-case bg-lime-400/85 text-white hover:bg-lime-400"
                        ><FaPlus></FaPlus>Add Task</Link>
                    </li>
                </div>

                {
                    user ?
                        <div className="dropdown dropdown-end flex gap-5">

                            <label tabIndex={0} className="btn hover:bg-lime-400 hover:bg-opacity-10  bg-transparent flex">
                                <h2 className="font-light mr-2 rounded text-lime-400/85">{user?.displayName} </h2>
                                <img className="w-8 rounded-full " src={user?.photoURL ? user?.photoURL : 'xyz'} alt="" />
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-4 shadow border-2 bg-neutral-500 text-white bg-blend-overlay rounded-box mt-14">
                                <li><button onClick={handleSignOut} className="btn btn-ghost  hover:bg-lime-400/85 normal-case font-semibold">SignOut</button></li>
                            </ul>
                        </div> :
                        <div className="">
                            <Link to='/signIn' className="btn btn-ghost text-lime-400/85 normal-case font-semibold text-lg"><MdLogin></MdLogin> Login</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;