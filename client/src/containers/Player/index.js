import React, { useEffect, useState } from "react";

export default function Player(props) {
  const [data, setData] = useState({
    videoId: props.match.params.id,
    videoData: {},
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `http://localhost:2022/video/${data.videoId}/data`
        );
        const resData = await res.json();
        setData({ ...data, videoData: resData });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <video controls muted autoPlay>
          <source
            src={`http://localhost:2022/video/${data.videoId}`}
            type="video/mp4"
          ></source>
        </video>
        <h1>{data.videoData.name}</h1>
      </header>
    </div>
  );
}
