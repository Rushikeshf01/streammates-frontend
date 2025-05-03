"use client"
import { Button } from "@/components/ui/button";
import { CreateRoomSchema } from "@/utils/roomValidationSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { createRoom } from "@/services/roomServices";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

export default function CreateRoom() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter()
    type CreateRoomValues = z.infer<typeof CreateRoomSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError
    } = useForm<CreateRoomValues>();

    const onSubmit: SubmitHandler<CreateRoomValues> = async (data) => {
        console.log("creating room.........", data)
        setIsLoading(prevState => !prevState)
        await createRoom(data).then(res => {
            
            console.log(res)
            if (res.status === 201) {
                // console.log(res,res.status, pathname, typeof(pathname), pathname === '/users/login')
                const roomCode = res.data.res.room_code
                router.push(`/room/${roomCode}`)
                // setIsLoading(prevState => !prevState)
            }

        })
        .catch(error => {
            if (error.status === 401) {
                setError('room_name', {
                    type: 'manual',
                    message: 'Invalid room name',
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
        <Card>
            {/* <CardHeader>
                    <CardTitle>Create Room</CardTitle>
                    <CardDescription>
                        Create a new room or join an existing one
                    </CardDescription>
                </CardHeader> */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">

                <CardContent className="space-y-2">
                    <Label htmlFor="room_name" className="text-base text-white font-semibold hidden sm:inline">Room Name </Label>
                    <input
                        {...register("room_name")}
                        placeholder="Enter room name here.."
                        className="border rounded px-3 py-2 my-2 w-full" />
                    {errors.roomName && <span>room name field is required</span>}
                </CardContent>
                <CardFooter className="my-4">
                    <Button
                        size="lg"
                        className="w-full gap-2 bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
                        // onClick={handleSignIn}
                        disabled={isLoading}
                    >
                            <Plus className="h-4 w-4" />
                            <span className="hidden sm:inline">{isLoading ? "Creating Room..." : "Create Room"}</span>
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
