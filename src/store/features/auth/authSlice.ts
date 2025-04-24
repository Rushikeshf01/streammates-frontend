import { createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number,
    username: string,
    email: string
}

export interface AuthState {
    user: User | null,
    loading: boolean
}

 
export const initialAuthState: AuthState = {
    // accesstoken: null,
    // refreshtoken: null,
    // isAuthenticated: false,
    user: {
        id: NaN,
        username: "",
        email: ""
    },
    loading: true
} 
export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers:  {
    setUser: (state, action) => {
            state.user = action.payload
            state.loading = false
        }
    }
})

export const { setUser } = authSlice.actions

export default authSlice.reducer