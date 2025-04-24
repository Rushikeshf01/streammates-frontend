import serverAxios from "@/lib/serverAxios";
import { setToken } from "@/lib/token";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"

const DJANGO_LOGIN_API_ENDPOINT = `/token/`

export async function POST(request: NextRequest) {
    const requestData = await request.json()

    try {
        const res = await serverAxios.post(DJANGO_LOGIN_API_ENDPOINT, requestData)
        // const data = res.data
        console.log("-------------------- on nextj s server",res.headers["set-cookie"])


        const response =  NextResponse.json({"loggedIn": true, 'res': res.data}, {status: 200})

        // Enable the below code if you want to store cookies and forward it to the nextjs client side
        // response.cookies.set()
        
        const setCookie:string[] | undefined = res.headers['set-cookie']
        // const cookieStore = await cookies()
        // cookieStore.set('access-token', setCookie[0])
        // cookieStore().set('access-token', setCookie['access-token'])
        // console.log("setcookies  are", setCookie, cookieStore)
        console.log("setcookies are", setCookie)

        // setToken(setCookie[0])
        // response.cookies.set('access-token', setCookie?.at(0))
        
        if(setCookie){
            // response.headers.set('Set-Cookie', setCookie[0])
            // response.headers.set('Set-Cookie', setCookie[1])
            // response.headers.set('Set-Cookie', setCookie[2])
            setCookie.forEach(cookie => response.headers.append('Set-Cookie',cookie))
        }
        console.log("response from next server to its frontend22222", response);

        return response
    } 
    catch (error) {
        console.error('Login failed:', error?.response?.data || error.message);
        return NextResponse.json({ loggedIn: false, error: 'Login failed' }, { status: 401 });
    }
}