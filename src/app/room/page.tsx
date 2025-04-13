import CreateRoom from "@/components/room/CreateRoom";
import JoinRoom from "@/components/room/JoinRoom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


export default function Page() {

  return (
    <div className="space-y-4 max-w-md mx-auto border flex items-center justify-center p-6 m-4 bg">

      <Tabs defaultValue="create" className="w-[400px]">
        <h1 className="text-3xl" >Stream mates</h1>
        <h3>Create a new room or join an existing one</h3>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="create">Create Room</TabsTrigger>
          <TabsTrigger value="join">Join Room</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <CreateRoom />
        </TabsContent>
        <TabsContent value="join">
          <JoinRoom />
        </TabsContent>
      </Tabs>
    </div>
  )
}
