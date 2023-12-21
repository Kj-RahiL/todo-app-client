import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../../Components/SocialLogIn";
import bgLogin from '../../assets/mesh-786.png'
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const SignIn = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    // console.log('state in the location login page', location.state)


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                toast.success('User Login Successful.!!', {
                    position: 'top-center',
                    autoClose: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error)
                toast.error("Invalid username or password. Please try again.!!")
                form.reset()
            })
    }

    const boxStyle = {
        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 1)',
    };
    return (
        <div className="hero min-h-screen bg-base-200 bg-cover" style={{ background: `url(${bgLogin})`, backgroundSize: 'cover', }}>
            <div className="hero-content flex-col lg:flex-row md:m-20" style={{ ...boxStyle, background: `url(${bgLogin})` }}>
                <div className=" flex-shrink-0 md:w-96 max-w-sm ">
                    <form onSubmit={handleLogin} className="card-body text-gray-200">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                            <label className="label">
                                <a href="#" className="text-[#F4AF00] label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {/* apply disabled for re captcha */}
                            <button className="btn btn-outline hover:text-[#F4AF00] text-white bg-[#f4a32b] bg-opacity-70">Login</button>
                        </div>
                        <div>
                            <p className='text-[#D1A054] text-center'>New here? Create a <Link to='/signUp' className='text-[#F4AF00] font-semibold'
                            >New Account</Link></p>
                        </div>
                        <div className='text-white divider'>Or</div>
                        <SocialLogIn></SocialLogIn>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;