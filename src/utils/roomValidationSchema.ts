import { z } from "zod";

export const CreateRoomSchema = z.object({
    room_name: z.string().min(2, "Room name is required"),
   
});

export const JoinRoomSchema = z.object({
    room_code: z.string().min(2, "Room code is required"),
   
});