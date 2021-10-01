import axios from "axios";

const axiosInstance=axios.create({
    baseURL:"https://api.le-systeme-solaire.net/rest/bodies/"
})
export default axiosInstance;