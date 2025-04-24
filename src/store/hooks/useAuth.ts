import { verifyMe } from "@/services/authServices";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { setUser } from "../features/auth/authSlice";

export const useAuth = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchUser = async () => {
            const res = await verifyMe()
            const resData = res.data
            console.log('resdata in useAuth', resData.res.user);
            if(resData.loggedIn){
                dispatch(setUser(resData.res.user))
            }
        }
        fetchUser()
    }, []);
    
    return 
}