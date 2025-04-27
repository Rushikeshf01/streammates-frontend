import axios from "axios";
import { LOGIN_URL, LOGOUT_URL, SIGNUP_URL, VERIFY_URL } from "@/constants/routes";

interface LoginDataType {
    email: string,
    password: string
}
interface SignupDataType {
    email: string,
    username: string,
    password: string,
    password2: string
}

export const signup = async (jsonData: SignupDataType) => {
    const res  = await axios.post(SIGNUP_URL, jsonData)
    // console.log('response obj on clinet side of next--------',res);
    return res
}

export const login = async (jsonData: LoginDataType) => {
    const res  = await axios.post(LOGIN_URL, jsonData, {withCredentials: true})
    // console.log('response obj on clinet side of next--------',res);
    return res
}


export const logout = async () => {
    const res  = await axios.post(LOGOUT_URL, {withCredentials: true})
    // console.log('response obj on clinet side of next--------',res);
    return res
}

export const verifyMe = async () => {
    const res = await axios.get(VERIFY_URL, {withCredentials: true})
    return res
}