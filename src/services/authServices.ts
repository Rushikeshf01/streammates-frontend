import axios from "axios";
import { LOGIN_URL } from "@/constants/routes";

export const login = async (jsonData: string) => {
    const res  = await axios.post(LOGIN_URL, jsonData)
    console.log('wesds--------',res.headers);
}