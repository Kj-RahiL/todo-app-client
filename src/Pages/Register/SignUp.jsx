import { Link, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import {  useContext } from "react";
import { useForm } from "react-hook-form";
import bgLogin from '../../assets/mesh-786.png'
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const { register, reset, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    const axiosPublic = useAxios()

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user add database')
                                    reset();
                                    toast.success('sign up success!!')
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };


    const boxStyle = {
        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 1)',
    };
    return (
        <div className="hero min-h-screen bg-base-200 bg-cover" style={{ background: `url(${bgLogin})`, backgroundSize: 'cover', }}>
            <div className="hero-content flex-col lg:flex-row md:m-20 bg-cover" style={{ ...boxStyle, background: `url(${bgLogin})` }}>
                <div className="flex-shrink-0 max-w-md md:w-96 mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h1 className="text-5xl font-bold text-white">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <p className='text-red-600' role="alert">Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <p className='text-red-600' role="alert">Email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20 })} type="password" name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>Password  must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password less than 20  characters</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline hover:text-[#F4AF00] text-white bg-[#f4a32b] bg-opacity-70">SignUp</button>
                        </div>
                    </form>
                    <div className='mb-4'>
                        <p className='text-[#D1A054]  text-center '>
                            Already registered? Go to <Link to='/signIn' className='text-[#F4AF00] font-medium'
                            >log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;