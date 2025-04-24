import { cookies } from "next/headers"

export const getToken = async() => {
    // get access token from cookies and return it
    const cookieStore = await cookies()
    const myAuthToken = cookieStore.get("access_token")
    return myAuthToken?.value
} 

export const getCookie = async (name: string) => {
    const cookie = await cookies()
    const token = cookie.get(name)
    console.log("your csrf --------------------------",token)
    return token?.value
}

export const setToken = async (access: string) => {
    const cookieStore = await cookies()
    cookieStore.set({
        name: "access-token",
        value: access,
        httpOnly: true, // limit client-side js
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 3600,
    })
    console.log("cookiestore from token ts",cookieStore);
    return cookieStore
}