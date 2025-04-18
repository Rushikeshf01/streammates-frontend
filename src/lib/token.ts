import { cookies } from "next/headers"

export const getToken = () => {
    // get access token from cookies and return it
    return '<your-access-token>'
} 

export const getCookie = async (name: string) => {
    const cookie = await cookies()
    const token = cookie.get(name)
    console.log("your csrf --------------------------",token)
    return token?.value
}