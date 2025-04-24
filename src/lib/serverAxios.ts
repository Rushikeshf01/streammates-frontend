import { DJANGO_API_ENDPOINT } from "@/constants/api";
import axios from "axios";
import {  getToken } from "./token";

// const csrftoken = await getCookie("csrftoken")
// console.log(csrftoken)
// const token = await getToken()
const serverAxios = axios.create({
    baseURL: DJANGO_API_ENDPOINT,
    withCredentials: true,
    headers: {
        'content-type': 'application/json',
        // 'X-CSRFToken': csrftoken
        // 'Cookie': `access_token=${token}`
    }
})

serverAxios.interceptors.request.use(
    async (config) => {
        const token = await getToken()
        // const csrfToken = await cookies.get('csrftoken');
        // const token = localStorage.getItem('token')
        console.log(config.headers)
        if (token){
            console.log(token)
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
    (error) => Promise.reject(error)
);

export default serverAxios