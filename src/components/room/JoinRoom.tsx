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
                        {...register("roomCode")}
                        placeholder="Enter room code here.."
                        className="border rounded px-3 py-2 my-2 w-full" />
                    {errors.roomCode && <span>room code field is required</span>}
                </CardContent>
                <CardFooter className="my-4">
                    <Button
                        type="submit"
                        size="lg"
                        className="gap-2 w-full bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
                    >
                        <span className="hidden sm:inline">Join Room</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
