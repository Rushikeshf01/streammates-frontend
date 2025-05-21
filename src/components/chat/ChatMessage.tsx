import { format } from "date-fns";
import { cn } from "@/lib/utils"

interface ChatMessageProps {
    message: {
        id: string
        user: {
            name: string
            isHost: boolean
            isSelf: boolean
        }
        text: string
        timestamp: Date
    }
}
const ChatMessage = ({message}: ChatMessageProps) => {
    const isSystem = message.user.name === 'System'

    if(isSystem) {
        return (
            <div className="py-2 px-3 rounded-md bg-[#0f1729]/20 text-center">
                <p className="text-xs text-muted-foreground">{message.text}</p>
            </div>
        )
    }

    return (
        <div className={cn(
            "flex flex-col max-w-[85%]",
            message.user.isSelf ? "ml-auto items-end" : "mr-auto items-start"
        )}>
            <div className="flex items-center gap-1 mb-1">
                <span className={cn(
                    "text-sm font-medium",
                    message.user.isHost && "text-primary"
                )}>
                    {message.user.name}
                    {message.user.isHost && " (Host) "}
                </span>
                <span className="text-xs text-[#1e293b]-foreground">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    })}
                </span>
            </div>
            <div className={cn(
                "py-2 px-3 rounded-lg",
                message.user.isSelf
                ? "bg-stream-accent text-primary-foreground" 
                : "bg-[#1e293b] text-foreground"
            )}>

                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default ChatMessage;