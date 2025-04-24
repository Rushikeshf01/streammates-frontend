"use client"
import QuickJoinRoom from "@/components/room/QuickJoinRoom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FilmIcon, LogIn, MessageSquare, Monitor, Plus, Share2, UserPlus, Users } from "lucide-react";
import { useState } from "react";
import Signin from "./users/login/page";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks/hooks";
// import { useSelector } from "react-redux";

export default function Home() {
  const userstate  = useAppSelector(state => state.user.user)
  console.log(userstate)
  const [user, setUser] = useState<{ username: string, email: string } | null>(userstate);
  // const [user, setUser] = useState<{ username: string, email: string } | null>(null);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  // const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  // const navigate = useNavigate();

  const handleSignIn = () => {
    console.log("sign in clicked");

    setShowAuthModal(true);
    // setAuthMode("signin");
  };

  // const handleSignUp = () => {
  //   setAuthMode("signup");
  // };

  const handleSignInSuccess = () => {
    // setUser({ name: "John Doe" });
    console.log('sign in success')
    setShowAuthModal(false);
    // toast.success("Welcome back! You're now signed in.", {
    //   description: "Create or join a room to start watching together."
    // });
  };

  // const handleSignOut = () => {
  //   setUser(null);
  //   toast.info("You've been signed out");
  // };

  const handleGuestEntry = () => {
    setUser({ username: "Guest User", email: "username@guest.com" });
    // toast.success("Welcome, Guest User!", {
    //   description: "You can now create or join a room."
    // });
  };

  const handleCreateRoom = () => {
    console.log("creating room");
    
  }
  return (
    <main className="flex-1">
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span className="text-stream-accent">Stream</span> and Watch Together
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Share your local media and enjoy synchronized streaming with friends, complete with video calls and chat.
              </p>

              <div className="mb-8 max-w-xl">
                <QuickJoinRoom />
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {userstate.username ? (
                  <>
                    <Button
                      size="lg"
                      asChild
                      variant="outline"
                      className="gap-2 border font-semibold h-10 text-base border-white/20 text-white hover:bg-white/10 h-10"
                      onClick={handleCreateRoom}>
                      <Link href="/room">
                        <Plus className="h-4 w-4" />
                        <span className="hidden sm:inline">Create Room</span>
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="lg"
                      className="gap-2 bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
                      onClick={handleSignIn}
                    >
                      <LogIn className="h-4 w-4" />
                      <span className="hidden sm:inline">Sign In</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 border font-semibold h-10 text-base border-white/20 text-white hover:bg-white/10 h-10">
                      <UserPlus className="h-4 w-4" />
                      <span className="hidden sm:inline" onClick={handleGuestEntry}>Continue as Guest</span>
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="glass-card p-4 aspect-video rounded-xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="h-16 w-16 text-stream-accent opacity-30" />
                </div>
              </div>
              <div className="absolute top-6 right-6 w-24 h-24 rounded-full glass-card flex items-center justify-center -rotate-6">
                <MessageSquare className="h-10 w-10 text-stream-highlight opacity-70" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-lg glass-card flex items-center justify-center rotate-12">
                <FilmIcon className="h-8 w-8 text-stream-accent opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-stream-dark/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card hover:translate-y-[-5px] transition-transform">
              <CardHeader>
                <FilmIcon className="h-10 w-10 text-stream-accent mb-2" />
                <CardTitle className="text-white">Local Media Streaming</CardTitle>
                <CardDescription className="text-white/70">
                  Stream content directly from your device with no uploading required
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Share movies, anime, or any video files without the need to upload. Supports multiple streaming methods including WebRTC and screen sharing.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:translate-y-[-5px] transition-transform">
              <CardHeader>
                <Share2 className="h-10 w-10 text-stream-accent mb-2" />
                <CardTitle className="text-white">Synchronized Playback</CardTitle>
                <CardDescription className="text-white/70">
                  Everyone watches at the exact same moment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Perfect synchronization means everyone experiences the same moments together, with automatic resync in case of connectivity issues.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:translate-y-[-5px] transition-transform">
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-stream-accent mb-2" />
                <CardTitle className="text-white">Real-Time Interaction</CardTitle>
                <CardDescription className="text-white/70">
                  Chat and video calls while watching
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  See and hear your friends reactions in real-time with integrated video calling and text chat for a true social experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-stream-dark/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-stream-accent/20 flex items-center justify-center mb-4 relative">
                <Users className="h-8 w-8 text-stream-accent" />
                <div className="absolute -top-2 -right-2 bg-stream-accent h-6 w-6 rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Create Account</h3>
              <p className="text-muted-foreground text-center">Sign up or continue as a guest to get started</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-stream-accent/20 flex items-center justify-center mb-4 relative">
                <Monitor className="h-8 w-8 text-stream-accent" />
                <div className="absolute -top-2 -right-2 bg-stream-accent h-6 w-6 rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Create Room</h3>
              <p className="text-muted-foreground text-center">Set up a new watch room with options</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-stream-accent/20 flex items-center justify-center mb-4 relative">
                <Share2 className="h-8 w-8 text-stream-accent" />
                <div className="absolute -top-2 -right-2 bg-stream-accent h-6 w-6 rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Invite Friends</h3>
              <p className="text-muted-foreground text-center">Share your room code with friends</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-stream-accent/20 flex items-center justify-center mb-4 relative">
                <FilmIcon className="h-8 w-8 text-stream-accent" />
                <div className="absolute -top-2 -right-2 bg-stream-accent h-6 w-6 rounded-full flex items-center justify-center text-white font-bold">4</div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Watch Together</h3>
              <p className="text-muted-foreground text-center">Enjoy synchronized streaming with chat</p>
            </div>
          </div>
          <div className="mt-12">
            {user ? (
              <Button size="lg" asChild className="bg-stream-accent hover:bg-stream-accent/90">
                <Link href="/create">Create a Room</Link>
              </Button>
            ) : (
              <Button size="lg" onClick={handleSignIn} className="bg-stream-accent hover:bg-stream-accent/90">
                Get Started
              </Button>
            )}
          </div>
        </div>
      </section>
      {showAuthModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm z-50 animate-fade-in">
          <div onClick={() => setShowAuthModal(false)} className="absolute inset-0"></div>
          <div className="z-10">
            <Signin />
          </div>
        </div>
      )}
    </main>
  );
}
