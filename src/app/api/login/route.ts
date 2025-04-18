import serverAxios from "@/lib/serverAxios";
import { NextResponse } from "next/server"

const DJANGO_LOGIN_API_ENDPOINT = `/token/`

export async function POST(request: Request) {
    const requestData = await request.json()
    const jsonData = JSON.stringify(requestData)

    try {
        const res = await serverAxios.post(DJANGO_LOGIN_API_ENDPOINT, jsonData)
        const data = res.data
        // console.log("-------------------- on nextj s server",res.headers["set-cookie"])

        const response =  NextResponse.json({"loggedIn": true, 'res': res.data}, {status: 200})

        // Enable the below code if you want to store cookies and forward it to the nextjs client side

        const setCookie = res.headers['set-cookie']
        
        if(setCookie){
            response.headers.set('Set-Cookie', setCookie[0])
            response.headers.set('Set-Cookie', setCookie[1])
            response.headers.set('Set-Cookie', setCookie[2])
        }
        console.log("response from next server to its frontend", setCookie);

        return response
    } 
    catch (error) {
        console.error('Login failed:', error?.response?.data || error.message);
        return NextResponse.json({ loggedIn: false, error: 'Login failed' }, { status: 401 });
    }
}