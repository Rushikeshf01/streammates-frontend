import { createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number,
    username: string,
    email: string
}

export interface AuthState {
    user: User | null,
    loading: boolean,
    isLoggedIn: boolean
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
    loading: true,
    isLoggedIn: false
} 
export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers:  {
        setUser: (state, action) => {
                state.user = action.payload
                state.loading = false
                state.isLoggedIn = true;
        },
        clearUser: (state) => {
            state.user = initialAuthState.user
            state.loading = false
            state.isLoggedIn = false;
        }
    }
})

export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer