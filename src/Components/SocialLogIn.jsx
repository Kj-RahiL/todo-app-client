import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProviders";
import useAxios from "../Hooks/useAxios";
import { useNavigate } from "react-router-dom";

const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext)
    const axiosPublic = useAxios()
    const navigate = useNavigate()
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/');
                    })
            })
    }

    return (
        <div className='mb-2'>
            <button onClick={handleGoogleLogIn} className='btn btn-outline w-full text-[#F4AF00]' >
                <FaGoogle></FaGoogle> Google
            </button>
        </div>
    );
};

export default SocialLogIn;