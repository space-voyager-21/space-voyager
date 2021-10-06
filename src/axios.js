import axios from "axios";
import Constants from "./components/Constant";

const axiosInstance=axios.create({
    baseURL:Constants.BaseURL
})
export default axiosInstance;