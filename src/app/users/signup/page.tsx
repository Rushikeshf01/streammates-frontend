"use client"
import { Button } from "@/components/ui/button";
import { SignupSchema } from "@/utils/UserLoginSignupSchema";
import { Lock, LogIn, Mail, User, UserPlus } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/services/authServices";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Signup() {
    const pathname = usePathname()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);

    type SignupValues = z.infer<typeof SignupSchema>
    const { register, handleSubmit, formState: { errors }, setError } = useForm<SignupValues>({
        resolver: zodResolver(SignupSchema)
    })

    const onSubmit: SubmitHandler<SignupValues> = async (data) => {
        console.log("this is the data on sign up submit")
        // const jsonData = JSON.stringify(data)
        // console.log(jsonData);

        // const res  = await axios.post(LOGIN_URL, jsonData)
        // console.log(res);
        setIsLoading(prevState => !prevState)
        await signup(data).then(res => {
            console.log(res, res.status)
            if (res.status === 201) {
                // handleSignInSuccess()
                // dispatch(setUser(res.data.res.user))
                if(pathname === '/users/signup'){
                    router.push('/users/login')
                }
                else{
                    // handleSignInSuccess()
                }
                setIsLoading(prevState => !prevState)
            }
        })
        .catch(error => {
            setError('root', {
                type: 'manual',
                message: "Something went wrong. Please try again later.",
            });
            
            setIsLoading(prevState => !prevState)
        })
        // console.log('signed up ======', res.data);

    }
    return (
        <>
            <section className="w-100 flex justify-center align-center m-auto my-10">

                <div className="w-full h-full bg-stream-dark rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-background dark:border-border">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-6">
                        <h1 className="text-xl mb-2 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign Up
                        </h1>
                        <h2 className="text-sm text-white/70">Sign up to your account to create or join rooms</h2>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <Mail className="relative left-3 top-7.5 h-4 w-4 text-muted-foreground" />
                                <input {...register("email", { required: "Email is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-9 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
                                {errors.email && <p role="alert">{errors.email.message}</p>}
                            </div>
                            <div>
                                <User className="relative left-3 top-7.5 h-4 w-4 text-muted-foreground" />
                                <input {...register("username", { required: "username is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-9 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
                                {errors.username && <p role="alert">{errors.username.message}</p>}
                            </div>
                            <div>
                                <Lock className="relative left-3 top-7.5 h-4 w-4 text-muted-foreground" />
                                <input type="password" {...register("password", { required: "Password is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-9 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password" required />
                                {errors.password && <p role="alert">{errors.password.message}</p>}
                            </div>
                            <div>
                                <Lock className="relative left-3 top-7.5 h-4 w-4 text-muted-foreground" />
                                <input type="password" {...register("password2", { required: "Confirm Password is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-9 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="confirm password" required />
                                {errors.password2 && <p role="alert">{errors.password2.message}</p>}
                            </div>

                            <Button
                                size="lg"
                                className="w-full gap-2 bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
                            // onClick={handleSignIn}
                                disabled={isLoading}
                            >
                                <LogIn className="h-4 w-4" />
                                <span className="hidden sm:inline">{isLoading ? "Signing Up...":"Sign Up"}</span>
                            </Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="/users/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login here</a>
                            </p>
                        </form>
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-white/50">Or continue with</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <Button
                                variant="outline"
                                className="gap-2 font-semibold h-10 text-base border border-white/20">
                                <UserPlus className="h-4 w-4" />
                                <span className="hidden sm:inline">Guest</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}