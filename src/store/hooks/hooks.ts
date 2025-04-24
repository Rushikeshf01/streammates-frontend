import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "../store";
import { useEffect } from "react";
import { verifyMe } from "@/services/authServices";

// export const useAuth = () => {

//     useEffect(() => {
//         const fetchUser = async () => {
//             const res = await verifyMe()
//             const resData = res.data
//             console.log(resData);
//             return resData
//         }
//         fetchUser()
//     }, []);

// }
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
