import { verifyMe } from "@/services/authServices";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { setUser } from "../features/auth/authSlice";
import { useRouter } from "next/navigation";


export const useAuth = () => {
    // const router = useRouter()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchUser = async () => {
            try{

                const res = await verifyMe()
                const resData = res.data
                const prrr = {'user':{...resData.res.user}, 'isLoggedIn': true}
                console.log('resdata in useAuth', resData, res.status, prrr);
                if(res.status === 200){
                    dispatch(setUser(resData.res.user))
                }
            }
            catch{
                // if (error.status === 401){
                    // router.push('/users/login')
                // }

            }
        }
        fetchUser()
    }, []);
    
    return 
}
