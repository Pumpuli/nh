import React, { useState, useEffect } from "react";

const useAudio = url => {
  
  const [audio] = useState(new Audio(url));
  audio.load()
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 10 seconds!')
      toggle()
    }, 10000);
    return () => clearTimeout(timer);
  }, []);



  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;


