import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

const Trailer = () => {
  const Location = useLocation();
  let Video;
  if (Location.pathname == '/mindhunter') {
    Video = 'https://www.youtube.com/watch?v=aZEwix6zvAk';
  } else if (Location.pathname == '/sherlock') {
    Video = 'https://www.youtube.com/watch?v=xK7S9mrFWL4';
  } else {
    Video = 'https://www.youtube.com/watch?v=lrcqbavlbyQ&t=2s';
  }
  return (
    <>
      <div className="trailer">
        <ReactPlayer width="70%" height="35vw" controls url={Video} />
      </div>
    </>
  );
};

export default Trailer;
