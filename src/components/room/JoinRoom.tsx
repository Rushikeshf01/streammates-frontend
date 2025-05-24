"use client"
import { Button } from "@/components/ui/button";
import { JoinRoomSchema } from "@/utils/roomValidationSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react";
import { joinRoom } from "@/services/roomServices";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JoinRoom() {
    type JoinRoomValues = z.infer<typeof JoinRoomSchema>
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<JoinRoomValues>();

    const onSubmit: SubmitHandler<JoinRoomValues> = async (data) => {
        console.log("joinig room.........", data)
        setIsLoading(prevState => !prevState)
        await joinRoom(data).then(res => {

            console.log(res)
            if (res.status === 201) {
                // console.log(res,res.status, pathname, typeof(pathname), pathname === '/users/login')
                const roomCode = data.room_code
                router.push(`/room/${roomCode}`)
                // setIsLoading(prevState => !prevState)
            }

        })
            .catch(error => {
                // console.error('join room failed:', error.status===400);
                if (error.status === 401) {
                    setError('room_code', {
                        type: 'manual',
                        message: 'Invalid room name',
                    });
                }
                else if (error.status === 400) {

                    let errorMsg = error.response?.data?.error;
                    if (Array.isArray(errorMsg.room_code)) {
                        errorMsg = errorMsg.room_code[0];
                    }
                    else if (typeof errorMsg.detail === "string") {
                        errorMsg = errorMsg.detail;
                    } else {
                        errorMsg = JSON.stringify(errorMsg);
                    }
                    setError('room_code', {
                        type: 'manual',
                        message: errorMsg || 'Invalid room code',
                    });
                }
                else {
                    setError('root', {
                        type: 'manual',
                        message: "Something went wrong. Please try again later.",
                    });
                }
                setIsLoading(prevState => !prevState)
            })
    }
    return (
        // <div className="space-y-4 p-4 max-w-md mx-auto">
        // <h1 className="text-2xl">Join room</h1>
        //     <form onSubmit={handleSubmit(onSubmit)} >
        //         <input defaultValue="test" 
        //         placeholder="Enter room code here.."
        //             {...register("roomCode")}  
        //             className="border rounded px-3 py-2 m-2 w-full" />
        //         {errors.roomCode && <span>room code field is required</span>}

        //         <Button type="submit" className="space-y-4 p-4 max-w-md mx-auto">Join Room</Button>
        //     </form>
        // </div>  
        <Card>
            {/* <CardHeader>
                <CardTitle>Join Room</CardTitle>
                <CardDescription>
                    Create a new room or join an existing one
                </CardDescription>
            </CardHeader> */}
            <form onSubmit={handleSubmit(onSubmit)} >
                <CardContent className="space-y-2">
                    <Label htmlFor="roomCode" className="text-base text-white font-semibold hidden sm:inline">Room Code </Label>
                    <input
                        {...register("room_code")}
                        placeholder="Enter room code here.."
                        className="border rounded px-3 py-2 my-2 w-full" />
                    {errors.room_code && <span> {errors.room_code.message} </span>}
                </CardContent>
                <CardFooter className="my-4">
                    <Button
                        type="submit"
                        size="lg"
                        className="gap-2 w-full bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
                        disabled={isLoading}
                    >
                        <ArrowRight className="ml-2 h-4 w-4" />
                        <span className="hidden sm:inline">{isLoading ? "Joining Room..." : "Join Room"}</span>
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
