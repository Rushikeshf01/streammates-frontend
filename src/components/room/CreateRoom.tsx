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
import Link from "next/link";
import { Plus } from "lucide-react";

export default function CreateRoom() {
    type CreateRoomValues = z.infer<typeof CreateRoomSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateRoomValues>();

    const onSubmit: SubmitHandler<CreateRoomValues> = (data) => console.log(data)
    return (
        <Card>
            {/* <CardHeader>
                    <CardTitle>Create Room</CardTitle>
                    <CardDescription>
                        Create a new room or join an existing one
                    </CardDescription>
                </CardHeader> */}
            <form onSubmit={handleSubmit(onSubmit)} >
                
                <CardContent className="space-y-2">
                    <Label htmlFor="roomName" className="text-base text-white font-semibold hidden sm:inline">Room Name </Label>
                    <input
                        {...register("roomName")}
                        placeholder="Enter room name here.."
                        className="border rounded px-3 py-2 my-2 w-full" />
                    {errors.roomName && <span>room name field is required</span>}
                </CardContent>
                <CardFooter className="my-4">
                    <Button
                        size="lg"
                        asChild
                        className="w-full gap-2 border font-semibold h-10 text-base border-white/20 bg-stream-accent hover:bg-stream-accent/90 text-white"
                    // onClick={handleSignIn}
                    >
                        <Link href="/room">
                        <Plus className="h-4 w-4" />
                        <span className="hidden sm:inline">Create Room</span>
                      </Link>
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
