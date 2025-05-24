import axios from "axios";
import { CREATE_ROOM_URL, JOIN_ROOM_URL, LOGIN_URL, LOGOUT_URL, VERIFY_URL } from "@/constants/routes";

interface LoginDataType {
    email: string,
    password: string
}

interface CreateRoomDataType {
    room_name: string,
}

interface JoinRoomDataType {
    room_code: string,
}

export const createRoom = async (jsonData: CreateRoomDataType) => {
    const res  = await axios.post(CREATE_ROOM_URL, jsonData)
    // console.log('response obj on clinet side of next--------',res);
    return res
}

export const joinRoom = async (jsonData: JoinRoomDataType) => {
    const res  = await axios.post(JOIN_ROOM_URL, jsonData)
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