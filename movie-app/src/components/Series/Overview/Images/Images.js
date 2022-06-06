import React from 'react';
import './Images.css';
import { useLocation } from 'react-router-dom';
import Assets from 'assets/Assets';

const Images = () => {
  const Location = useLocation();

  let Long, Short1, Short2;

  if (Location.pathname == '/mindhunter') {
    Long = Assets.mindhunterLong;
    Short1 = Assets.mindhunterShort1;
    Short2 = Assets.mindhunterShort2;
  } else if (Location.pathname == '/sherlock') {
    Long = Assets.sherlockLong;
    Short1 = Assets.sherlockShort1;
    Short2 = Assets.sherlockShort2;
  } else if (Location.pathname == '/breakingbad') {
    Long = Assets.breakingbadLong;
    Short1 = Assets.breakingbadShort1;
    Short2 = Assets.breakingbadShort2;
  }

  return (
    <div className="container_images">
      <div className="child_images_1">
        <img className="long" src={Long} />
      </div>
      <div className="child_images_2">
        <img className="short" src={Short1} />
        <img className="short" src={Short2} />
      </div>
    </div>
  );
};

export default Images;
