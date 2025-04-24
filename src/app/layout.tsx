"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header"
import { usePathname } from "next/navigation"
import StoreProvider from "./StoreProvider"
import { useRouter } from "next/navigation";
import SessionInitializer from "@/components/SessionInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const hiddenRoutes = ["/users/login", "/users/signup"]
  const router = useRouter()
  // const dispatch = useAppDispatch();

  // const userData = useAuth()
  // console.log('-----user data', userData);

  //   dispatch(setUser({
  //     userData
  //   })
  // )

  const handleSignIn = () => {
    console.log('sig in in layout')
    router.push('/users/login')
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <SessionInitializer />
          {!hiddenRoutes.includes(pathname) && <Header onSignIn={handleSignIn}/>}
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
