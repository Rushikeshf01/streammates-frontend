"use client"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileVideo, Share, Users } from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";
import VideoPlayer from "@/components/room/VideoPlayer";

export default function Page() {
    const { code } = useParams<{ code: string; }>()

    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [isHost, setIsHost] = useState(true);
    const [participants, setParticipants] = useState([
        { id: "1", name: "You (Host)", isSelf: true },
        { id: "2", name: "Alice", isSelf: false },
        { id: "3", name: "Bob", isSelf: false },
      ]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return

        const file = files[0]
        const url = URL.createObjectURL(file)
        setVideoUrl(url)
    }
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
            <Tabs defaultValue="chat" className="flex flex-col h-full">
                <TabsList className="grid grid-cols-2 m-2">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="participants">Participants</TabsTrigger>
                </TabsList>
                <TabsContent value="chat" className="flex-1 p-0 m-0 overflow-hidden">
                {/* <Chat roomId={roomId || ""} /> */}
                </TabsContent>
                <TabsContent value="participants" className="flex-1 p-4 overflow-auto">
                <div className="space-y-4">
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
            </Tabs>
            </div>
        </div>
        </div>
    )
}
