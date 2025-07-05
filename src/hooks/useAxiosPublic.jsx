import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://y-chi-flame.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;