"use client"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileVideo, Share, User, Frown, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import VideoPlayer from "@/components/room/VideoPlayer";
import Chat from "@/components/chat/Chat";

export default function Page() {
    const { code } = useParams<{ code: string; }>()

    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [isHost, setIsHost] = useState(true);
    const [participants, setParticipants] = useState([
        { id: "1", name: "You (Host)", isSelf: true },
        // { id: "2", name: "Alice", isSelf: false },
        // { id: "3", name: "Bob", isSelf: false },
      ]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return

        const file = files[0]
        const url = URL.createObjectURL(file)
        setVideoUrl(url)
    }

    useEffect(() => {
        const peerConnection = new RTCPeerConnection();
        // const roomSocket = new WebSocket(
        //     `ws://127.0.0.1:8000/ws/notify/${}/`
        // );
    
        // roomSocket.onopen = function () {
        // console.log("Web Socket successfully connected.");
        // };
    
        // // on socket close
        // roomSocket.onclose = function () {
        // console.log("Web Socket closed unexpectedly");
        // };
    
        // roomSocket.onmessage = (e) => {
        // console.log("Data: ", JSON.parse(e.data));
        // const data = JSON.parse(e.data)

        // };

    }, [participants]);

    return (
        <div className="flex flex-col h-screen">
        <header className="px-6 py-4 bg-stream-dark border-b border-border flex items-center justify-between">
            <h1 className="text-lg font-semibold">Room: {code}</h1>
            <div className="flex items-center gap-4">
            <Button 
                variant="outline" 
                size="sm" 
                // onClick={copyRoomLink}
                className="flex items-center gap-2"
            >
                <Share className="h-4 w-4" />
                Share
            </Button>
            <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
            >
                <Users className="h-4 w-4" />
                {participants.length} Viewers
            </Button>
            </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 flex flex-col min-w-0">
            {videoUrl ? (
                <VideoPlayer videoUrl={videoUrl} />
            ) : (
                <div className="flex-1 flex items-center justify-center bg-stream-dark">
                <div className="text-center p-8 max-w-md glass-card">
                    <FileVideo className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h2 className="text-xl font-semibold mb-2">No video selected</h2>
                    <p className="text-muted-foreground mb-6">
                    Select a video file from your device to start streaming
                    </p>
                    <Button className="relative bg-stream-accent">
                    Select Video File
                    <input
                        type="file"
                        accept="video/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleFileSelect}
                    />
                    </Button>
                </div>
                </div>
            )}
            </div>

            <div className="w-96 border-l border-border flex flex-col bg-stream-dark">
            {/* <Tabs defaultValue="chat" className="flex flex-col h-full">

                <TabsList className="grid grid-cols-2 p-2">
                    <TabsTrigger value="chat" className="text-base text-white font-semibold hidden sm:inline text-center">Chat</TabsTrigger>
                    <TabsTrigger value="participants" className="text-base text-white font-semibold hidden sm:inline text-center">Participants</TabsTrigger>
                </TabsList>
                <TabsContent value="chat">
                    <Chat roomCode={code || ""} />
                </TabsContent>
                <TabsContent value="participants">
                    <div className="flex flex-col h-full">
                        <h3 className="text-sm font-medium text-muted-foreground">PARTICIPANTS ({participants.length})</h3>
                        <div className="space-y-2">
                        {participants.map((participant) => (
                            <div 
                            key={participant.id} 
                            className="p-3 rounded-md flex items-center justify-between bg-black/20"
                            >
                            <span className="font-medium">
                                {participant.name}
                            </span>
                            {!participant.isSelf && isHost && (
                                <Button variant="ghost" size="sm">
                                Remove
                                </Button>
                            )}
                            </div>
                        ))}
                        </div>
                    </div>
                </TabsContent>
            </Tabs> */}
            <Tabs defaultValue="chat" className="w-[400px]">
                    <TabsList className="grid w-92 h-full grid-cols-2 m-2 p-1 bg-[#1e293b] border-border">
                      <TabsTrigger value="chat" className="text-base text-white font-semibold hidden sm:inline text-center ">Chat</TabsTrigger>
                      <TabsTrigger value="participants" className="text-base text-white font-semibold hidden sm:inline text-center">Participants</TabsTrigger>
                    </TabsList>
                    <TabsContent value="chat">
                        <Chat roomCode={code || ""} />
                    </TabsContent>
                    <TabsContent value="participants">
                        {!(participants.length > 1) ?  
                            (
                                <div className="mx-10">
                                    <Frown  className="h-10 w-10 m-auto mb-4" color="#b526c0" />
                                    <p>Go get some friends and touch some grass!!!!! </p>
                                </div>
                        ) : (

                            <p>you will see your friends here soon. {participants.length}</p>
                        )
                        }
                    </TabsContent>
                  </Tabs>
            </div>
        </div>
        </div>
    )
}
