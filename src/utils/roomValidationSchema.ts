import { z } from "zod";

export const CreateRoomSchema = z.object({
    roomName: z.string().min(2, "Room name is required"),
   
});

export const JoinRoomSchema = z.object({
    roomCode: z.string().min(2, "Room code is required"),
   
});