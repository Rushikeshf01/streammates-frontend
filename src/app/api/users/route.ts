import serverAxios from "@/lib/serverAxios";
import { NextRequest, NextResponse } from "next/server"

const DJANGO_SIGNUP_API_ENDPOINT = `/users/`

export async function POST(request: NextRequest) {
    const requestData = await request.json()

    console.log("to the django signup")
    try {
        const res = await serverAxios.post(DJANGO_SIGNUP_API_ENDPOINT, requestData)

        return  NextResponse.json({SignedUp: true, 'res': res.data}, {status: 201})
    } 
    catch (error) {
        console.error('Login failed:', error?.response?.data || error.message);
        return NextResponse.json({ SignedUp: false, error: 'Sign up failed' }, { status: 401 });
    }
}