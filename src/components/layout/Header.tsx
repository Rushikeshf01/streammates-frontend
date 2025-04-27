"use client"
// import { useState } from "react";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { LogIn, Monitor, Plus, UserPlus, User } from "lucide-react";
import { useAppSelector } from '@/store/hooks/hooks';
import UserMenu from './UserMenu';
import useLogout from '@/store/hooks/useLogout';

interface HeaderProps {
  // user: { name: string } | null;
  onSignIn: () => void;
  onSignUp: () => void;
  // onSignOut: () => void;
}

const Header = ({onSignIn, onSignUp }: HeaderProps) => {

  const {user, isLoggedIn}  = useAppSelector(state => state.user)
  console.log(user)
  // const [user, setUser] = useState<{ username: string, email: string } | null>(user);
  const logout = useLogout()
  const handleGuestEntry = () => {
    setUser({ username: "Guest User", email: "username@guest.com" });
    // toast.success("Welcome, Guest User!", {
    //   description: "You can now create or join a room."
    // });
  };
  
  // const onSignOut = () => {
  //   console.log('signed out ');
    
  // }
  return (
    <header className="border-b border-border bg-stream-dark">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/"
          className="flex items-center gap-2 text-xl font-bold text-white hover-scale">
          <Monitor className="h-6 w-6 text-stream-accent" />
          <span>Stream Mates</span>
        </Link>
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/room">
                  <Plus className="h-4 w-4" />
                  <span>Create Room</span>
                </Link>
              </Button>
              <span>{user?.username}</span>
              <UserMenu user={user} onSignOut={logout} />
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="gap-2 font-semibold h-10 text-base">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline" onClick={handleGuestEntry}>Guest</span>
              </Button>
              <Button
                className="gap-2 bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
                onClick={onSignIn}
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
              <Button
                className="gap-2 bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
                onClick={onSignUp}
              >
                <UserPlus className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Up</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;