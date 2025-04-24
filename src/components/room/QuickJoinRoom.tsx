"use client"
import { Button } from "@/components/ui/button";
import { JoinRoomSchema } from "@/utils/roomValidationSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react";

export default function QuickJoinRoom() {
    type JoinRoomValues = z.infer<typeof JoinRoomSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<JoinRoomValues>();

    const onSubmit: SubmitHandler<JoinRoomValues> = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="flex">

                <div className="space-y-2">
                    <input
                        {...register("roomCode")}
                        placeholder="Enter room code here.."
                        className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 p-3 rounded-md w-full" />
                    {errors.roomCode && <span>room code field is required</span>}
                </div>
                <CardFooter>

                    <Button
                        type="submit"
                        size="lg"
                        className="gap-2 bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-12"
                    >
                        <span className="hidden sm:inline">Join Room</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </div>
        </form>
    )
}
