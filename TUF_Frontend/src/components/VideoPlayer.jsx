/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ onVideoProgress, onVideoEnd, onVideoLoad }) => {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [totalWatched, setTotalWatched] = useState(0);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player(playerRef.current, {
        videoId: "YOUR_VIDEO_ID", // Replace with your first video ID or initial video ID
        playerVars: {
          playlist: "YOUR_PLAYLIST_ID", // Replace with your playlist ID
          autoplay: 1,
          controls: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
      setPlayer(newPlayer);
    };
  }, []);

  const onPlayerReady = (event) => {
    event.target.playVideo();
    const duration = event.target.getDuration();
    onVideoLoad(duration);
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      const updateTimer = setInterval(() => {
        const currentTime = event.target.getCurrentTime();
        onVideoProgress(currentTime);
        setTotalWatched((prev) => prev + 1);

        if (currentTime >= event.target.getDuration()) {
          clearInterval(updateTimer);
        }
      }, 1000);
    }

    if (event.data === window.YT.PlayerState.ENDED) {
      onVideoEnd();
    }
  };

  return <div ref={playerRef} id="player"></div>;
};

export default VideoPlayer;
