"use client"
import { Button } from "@/components/ui/button";
import { creatreRoomSchema } from "@/utils/roomValidationSchema";
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

export default function CreateRoom() {
    type CreateRoomValues = z.infer<typeof creatreRoomSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateRoomValues>();

    const onSubmit: SubmitHandler<CreateRoomValues> = (data) => console.log(data)
    return (
            <Card>
                <CardHeader>
                    <CardTitle>Create Room</CardTitle>
                    <CardDescription>
                        Create a new room or join an existing one
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <CardContent className="space-y-2">
                        <Label htmlFor="roomName">Room Name </Label>
                        <input
                            {...register("roomName")}
                            placeholder="Enter room name here.."
                            className="border rounded px-3 py-2 m-2 w-full" />
                        {errors.roomName && <span>room name field is required</span>}
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="space-y-4 p-4 max-w-md mx-auto">Create Room</Button>
                    </CardFooter>
                </form>
            </Card>
    )
}
