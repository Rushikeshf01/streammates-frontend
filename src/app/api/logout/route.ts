import serverAxios from "@/lib/serverAxios";
import { NextRequest, NextResponse } from "next/server"

const DJANGO_LOGOUT_API_ENDPOINT = `/auth/logout/`

export async function POST(request: NextRequest) {
    // const requestData = await request.json()

    try {
        const cookie = request.headers.get('cookie');
        const res = await serverAxios.post(DJANGO_LOGOUT_API_ENDPOINT, {
            headers: {
                'Cookie': cookie
            }
        })

        const response =  NextResponse.json({"loggedOut": true, 'res': res.data}, {status: 200})

        const setCookie:string[] | undefined = res.headers["set-cookie"]
        if(setCookie){
            setCookie.forEach(cookie => response.headers.append('Set-Cookie',cookie))
        }

        // console.log("response from next server to its frontend22222", response);

        return response
    } 
    catch (error) {
        console.error('Login failed:', error?.response?.data || error.message);
        return NextResponse.json({ loggedOut: false, error: 'Logout failed' }, { status: 401 });
    }
}