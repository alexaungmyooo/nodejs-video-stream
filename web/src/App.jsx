
import './App.css'
import VideoPlayer from "./VideoPlayer";

function App() {
  

  return (
    <>
      <div className="App">
        <h1>HTTP Video Streaming</h1>
        <p>This video is 61MB and is being streamed instead of downloaded.</p>
        <p>
          Feel free to seek through the video and it only loads the part you
          want to watch
        </p>
        <VideoPlayer url="http://localhost:8000/video" />
        <i>Big Buck Bunny</i>
      </div>
    </>
  );
}

export default App
