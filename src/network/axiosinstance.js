import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "http://192.168.11.98:8005"
})

export default axiosInstance;

