import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoThumbnail from "react-video-thumbnail";

export default function Home(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("http://localhost:2022/videos");
        const data = await response.json();
        setVideos([...data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVideos();
  }, []);

  return (
    <div className="App App-header">
      <div className="container">
        <div className="row">
          {videos.map((video) => (
            <div className="col-md-4" key={video.id}>
              <Link to={`/player/${video.id}`}>
                <div className="card border-0">
                  <VideoThumbnail
                    videoUrl={`http://localhost:2022/video/${video.id}`}
                    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
