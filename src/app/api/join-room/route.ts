import serverAxios from "@/lib/serverAxios";
import { getCookie } from "@/lib/token";
import { NextRequest, NextResponse } from "next/server"

const DJANGO_JOIN_ROOM_API_ENDPOINT = `/room/participants/`

export async function POST(request: NextRequest) {
    const requestData = await request.json()
    console.log(requestData)
    try {
        
        const cookie = request.headers.get('cookie');
        const csrf = await getCookie('csrftoken')
        const res = await serverAxios.post(DJANGO_JOIN_ROOM_API_ENDPOINT, requestData, {
            headers: {
                'Cookie': cookie,
                'X-CSRFToken':csrf
            }
        })

        const response =  NextResponse.json({"created": true, 'res': res.data}, {status: 201})

        return response
    } 
    catch (error) {
        console.error('join room failed:', error?.response?.data || error.message);
        const errorMessage = error?.response?.data
        return NextResponse.json({ Joined: false, error: errorMessage }, { status: error?.response?.status || 500 });   
    }
}