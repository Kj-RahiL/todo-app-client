import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="flex">
            <div className="bg-gradient-to-r from-black from-10% via-amber-500 via-30% to-emerald-500 to-90% ..."></div>
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-gradient-to-r from-black  via-lime-800 via-30% to-black text-gray-100">
                <div className="text-center underline font-semibold text-gray-700 pt-20">
                    {
                        user &&
                        <div className="flex gap-5 justify-evenly items-center text-white">

                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} alt="user image" />
                                </div>
                            </div>
                            <h1>{user?.displayName}</h1>

                        </div>

                    }
                </div>
                <ul className="menu p-4 text-md font-semibold">
                    {
                        user && <>

                            <li><NavLink to='/dashboard/taskManager'>
                                Task Management
                            </NavLink></li>

                        </>
                    }
                    <div className="divider"></div>
                    <hr className=" border" />

                    <li><NavLink to='/'>
                        <FaHome></FaHome>Home
                    </NavLink></li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;