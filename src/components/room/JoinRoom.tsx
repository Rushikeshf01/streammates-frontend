"use client"
import { Button } from "@/components/ui/button";
import { JoinRoomSchema } from "@/utils/roomValidationSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function JoinRoom() {
    type JoinRoomValues = z.infer<typeof JoinRoomSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<JoinRoomValues>();

    const onSubmit: SubmitHandler<JoinRoomValues> = (data) => console.log(data)
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
            <CardHeader>
                <CardTitle>Join Room</CardTitle>
                <CardDescription>
                    Create a new room or join an existing one
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)} >
                <CardContent className="space-y-2">
                    <Label htmlFor="roomCode">Room Code </Label>
                    <input 
                        {...register("roomCode")}
                        placeholder="Enter room code here.."
                        className="border rounded px-3 py-2 m-2 w-full" />
                    {errors.roomCode && <span>room code field is required</span>}
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="space-y-4 p-4 max-w-md mx-auto">Join Room</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
