interface VideoPlayerProps {
    videoUrl: string
}
export default function VideoPlayer({videoUrl}: VideoPlayerProps) {
    return (
        <div id="video-container" className="relative flex-1 bg-black">

      <video className="w-full h-full" controls preload="none">
        <source src={videoUrl} type="video/mp4" />
        <track
          src={videoUrl}
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
        </div>
    )
  }