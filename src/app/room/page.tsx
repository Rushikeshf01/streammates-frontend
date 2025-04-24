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
    // <div className="space-y-4 max-w-md mx-auto border flex items-center justify-center p-6 m-4 bg">
      <div className="w-full h-120 bg-stream-dark rounded-lg shadow space-y-4 max-w-md mx-auto my-3 flex items-center justify-center dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-background dark:border-border dark:my-20">

      <Tabs defaultValue="create" className="w-[400px]">
        <h1 className="text-3xl" >Stream mates</h1>
        <h3>Create a new room or join an existing one</h3>
        <TabsList className="grid w-full h-full grid-cols-2 p-2 my-2 bg-stream-dark border-border">
          <TabsTrigger value="create" className="text-base text-white font-semibold hidden sm:inline text-center ">Create Room</TabsTrigger>
          <TabsTrigger value="join" className="text-base text-white font-semibold hidden sm:inline text-center ">Join Room</TabsTrigger>
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
