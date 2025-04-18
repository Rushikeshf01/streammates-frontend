import { z } from "zod";

export const SignupSchema = z.object({
    email: z.string().min(2, "Email  is required"),
   
});

export const SigninSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 6 characters"),
});