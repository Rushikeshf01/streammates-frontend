import serverAxios from "@/lib/serverAxios";
import { getCookie } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server"

const DJANGO_ROOM_API_ENDPOINT = `/rooms/`

export async function POST(request: NextRequest) {
    const requestData = await request.json()
    console.log(requestData)
    try {
        
        const cookie = request.headers.get('cookie');
        const csrf = await getCookie('csrftoken')
        console.log(']]]]]]]]]]]]]]]]]]]]',request.headers)
        const res = await serverAxios.post(DJANGO_ROOM_API_ENDPOINT, requestData, {
            headers: {
                'Cookie': cookie,
                'X-CSRFToken':csrf
            }
        })

        const response =  NextResponse.json({"created": true, 'res': res.data}, {status: 201})

        return response
    } 
    catch (error) {
        console.error('Login failed:', error?.response?.data || error.message);
        return NextResponse.json({ loggedIn: false, error: 'Login failed' }, { status: 401 });
    }
}