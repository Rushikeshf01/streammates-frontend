import { DJANGO_API_ENDPOINT } from "@/constants/api";
import axios from "axios";
import { getCookie, getToken } from "./token";

// const csrftoken = await getCookie("csrftoken")
// console.log(csrftoken)

const serverAxios = axios.create({
    baseURL: DJANGO_API_ENDPOINT,
    withCredentials: true,
    headers: {
        'content-type': 'application/json',
        // 'X-CSRFToken': csrftoken
    }
})

serverAxios.interceptors.request.use(
    (config) => {
        const token = getToken()
        // const csrfToken = await cookies.get('csrftoken');
        // const token = localStorage.getItem('token')
        if (token && !config.headers['Authorization']){
            config.headers['Authorization'] = `Bearer <your-access-token>`
        }
        // if (csrfToken && ['post', 'put', 'patch', 'delete'].includes(config.method)) {
        //   config.headers['X-CSRFToken'] = csrfToken;
        // }
        return config;
    }, 
  (error) => Promise.reject(error)
);

serverAxios.interceptors.response.use(
    (response) =>  response,
    (error) => Promise.reject(error));

export default serverAxios