"use client"
// import { useState } from "react";
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { LogIn, Monitor, UserPlus } from "lucide-react";

interface HeaderProps {
  user: { name: string } | null;
  onSignIn: () => void;
  onSignOut: () => void;
}

const Header = ({ user, onSignIn, onSignOut }: HeaderProps) => {

  return (
    <header className="border-b border-border bg-stream-dark">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/"
          className="flex items-center gap-2 text-xl font-bold text-white hover-scale">
          <Monitor className="h-6 w-6 text-stream-accent" />
          <span>Stream Mates</span>
        </Link>
        <div className="flex items-center gap-4">

          <Button
            variant="outline"
            className="gap-2 font-semibold h-10 text-base">
            <UserPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Guest</span>
          </Button>
          <Button
            className="gap-2 bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
          >
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;