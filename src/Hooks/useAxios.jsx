import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://fitness-tracker-server-mu.vercel.app'
})
const useAxios = () => {
    return axiosPublic
};

export default useAxios;