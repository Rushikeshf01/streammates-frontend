"use client"
import QuickJoinRoom from "@/components/room/QuickJoinRoom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FilmIcon, Link, LogIn, MessageSquare, Monitor, Share2, UserPlus, Users } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  // const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  // const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  // const navigate = useNavigate();

  const handleSignIn = () => {
    // setShowAuthModal(true);
    // setAuthMode("signin");
  };

  // const handleSignUp = () => {
  //   setAuthMode("signup");
  // };

  // const handleSignInSuccess = () => {
  //   setUser({ name: "John Doe" });
  //   setShowAuthModal(false);
  //   toast.success("Welcome back! You're now signed in.", {
  //     description: "Create or join a room to start watching together."
  //   });
  // };

  // const handleSignOut = () => {
  //   setUser(null);
  //   toast.info("You've been signed out");
  // };

  const handleGuestEntry = () => {
    setUser({ name: "Guest User" });
    // toast.success("Welcome, Guest User!", {
    //   description: "You can now create or join a room."
    // });
  };
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
                {user ? (
                  <Button size="lg" asChild className="bg-stream-accent hover:bg-stream-accent/90 group">
                    <Link to="/create" className="flex items-center gap-2">
                      <Users className="h-5 w-5 group-hover:animate-pulse" />
                      <span>Create a Room</span>
                      <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button
                      size="lg"
                      className="gap-2 bg-stream-accent hover:bg-stream-accent/90 text-white text-base font-semibold h-10"
                    >
                      <LogIn className="h-4 w-4" />
                      <span className="hidden sm:inline">Sign In</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 border font-semibold h-10 text-base border-white/20 text-white hover:bg-white/10 h-10">
                      <UserPlus className="h-4 w-4" />
                      <span className="hidden sm:inline">Continue as Guest</span>
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
                <Link to="/create">Create a Room</Link>
              </Button>
            ) : (
              <Button size="lg" onClick={handleSignIn} className="bg-stream-accent hover:bg-stream-accent/90">
                Get Started
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}


{/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
  <Image
    className="dark:invert"
    src="/next.svg"
    alt="Next.js logo"
    width={180}
    height={38}
    priority
  />
  <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    <li className="mb-2 tracking-[-.01em]">
      Get started by editing{" "}
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
        src/app/page.tsx
      </code>
      .
    </li>
    <li className="tracking-[-.01em]">
      Save and see your changes instantly.
    </li>
  </ol>

  <div className="flex gap-4 items-center flex-col sm:flex-row">
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="dark:invert"
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Deploy now
    </a>
    <a
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read our docs
    </a>
  </div>
</main>
<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/file.svg"
      alt="File icon"
      width={16}
      height={16}
    />
    Learn
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/window.svg"
      alt="Window icon"
      width={16}
      height={16}
    />
    Examples
  </a>
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image
      aria-hidden
      src="/globe.svg"
      alt="Globe icon"
      width={16}
      height={16}
    />
    Go to nextjs.org →
  </a>
</footer>
</div> */}