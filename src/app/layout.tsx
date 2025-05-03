"use client"
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header"
import { usePathname } from "next/navigation"
import StoreProvider from "./StoreProvider"
import { useRouter } from "next/navigation";
import SessionInitializer from "@/components/SessionInitializer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  // const hiddenRoutes = ["/users/login", "/users/signup"]
  const hiddenRoutesRegx = [/^\/users\/login$/, /^\/users\/signup$/, /^\/room\/[^/]+$/ ]
  const router = useRouter()
  // const dispatch = useAppDispatch();

  // const userData = useAuth()
  // console.log('-----user data', userData);

  //   dispatch(setUser({
  //     userData
  //   })
  // )
  const shouldHideHeader = hiddenRoutesRegx.some(regx => regx.test(pathname))
  const handleSignIn = () => {
    console.log('sig in in layout')
    router.push('/users/login')
  }
  const handleSignUp = () => {
    console.log('sig up in layout')
    router.push('/users/signup')
  }

  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <SessionInitializer />
          {/* {!hiddenRoutes.includes(pathname) && <Header onSignIn={handleSignIn} onSignUp={handleSignUp}/>} */}
          {!shouldHideHeader && <Header onSignIn={handleSignIn} onSignUp={handleSignUp}/>}
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
