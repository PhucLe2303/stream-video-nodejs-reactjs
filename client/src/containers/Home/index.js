import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                  <img
                    src={`http://localhost:2022${video.poster}`}
                    alt={video.name}
                  />
                  <div className="card-body">
                    <p>{video.name}</p>
                    <p>{video.duration}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
