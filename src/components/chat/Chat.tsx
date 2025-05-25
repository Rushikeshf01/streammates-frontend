import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import ChatMessage from "./ChatMessage";

interface Message {
  id: string;
  user: {
    name: string;
    isHost: boolean;
    isSelf: boolean;
  };
  text: string;
  timestamp: Date;
}

interface ChatProps {
  roomCode: string;
  messages: Message[];
  sendMessage: (message: string) => void;
}

const Chat = ({ roomCode, messages, sendMessage }: ChatProps) => {
  const [dummyMessages, setDummyMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Dummy data for testing
  useEffect(() => {
    const dummyMessages: Message[] = [
      {
        id: "1",
        user: { name: "System", isHost: false, isSelf: false },
        text: "Welcome to the watch room! You can chat with other participants here.",
        timestamp: new Date(Date.now() - 1000 * 60 * 5)
      },
      {
        id: "2",
        user: { name: "Alice", isHost: false, isSelf: false },
        text: "Hey everyone! Excited to watch together!",
        timestamp: new Date(Date.now() - 1000 * 60 * 2)
      },
      {
        id: "3",
        user: { name: "You", isHost: true, isSelf: true },
        text: "Welcome Alice! We'll start in a few minutes.",
        timestamp: new Date(Date.now() - 1000 * 60)
      },
      {
        id: "4",
        user: { name: "Bob", isHost: false, isSelf: false },
        text: "I brought popcorn 🍿",
        timestamp: new Date(Date.now() - 1000 * 30)
      }
    ];
    
    setDummyMessages(dummyMessages);
  }, [roomCode]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      user: { name: "You", isHost: true, isSelf: true },
      text: inputMessage.trim(),
      timestamp: new Date()
    };
    
    
    setDummyMessages((prev) => [...prev, newMessage]);
    sendMessage(inputMessage.trim());
    setInputMessage("");
    
    // In a real app, we would send this message to the server
    console.log("=////////:", newMessage);
  };

  return (
    <div className="flex flex-col h-full px-2">
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-3 border-t border-border">
        <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
            value={inputMessage}
            placeholder="Type a message..."
            onChange={(e) => { setInputMessage(e.target.value) }}
            className="border rounded px-3 py-2 my-2 w-full" />
          <Button type="submit" size="icon" disabled={!inputMessage.trim()} className="bg-stream-accent hover:bg-stream-accent/90 text-white pointer">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;