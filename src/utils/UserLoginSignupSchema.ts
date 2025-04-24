import { z } from "zod";

export const SignupSchema = z.object({
    email: z.string().min(2, "Email  is required"),
    username: z.string().min(5, "invlaid username"),
    password: z.string().min(8, "Password must be at least 6 characters"),
    confirmpassword: z.string().min(8, "Confirm Password must be at least 6 characters")
   
});

export const SigninSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 6 characters"),
});