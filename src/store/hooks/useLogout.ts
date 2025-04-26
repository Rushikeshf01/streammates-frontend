import { logout } from "@/services/authServices"
import { clearUser } from "../features/auth/authSlice"
import { useAppDispatch } from "./hooks"

export default function useLogout() {
    const dispatch = useAppDispatch()
  
    const logoutUser = async () => {
      try {
        await logout()
        dispatch(clearUser())
      } catch (err) {
        console.error('Logout failed', err)
      }
    }
  
    return logoutUser
  }