import React from 'react';
import mindhunter from '../../assets/mindhunter.png';
import sherlock from '../../assets/sherlock.png';
import breakingbad from '../../assets/breakingbad.jpg';
import './Series.css';

const Series = () => {
  return (
    <>
      <div className="container">
        <div className="child">
          <img className="series" src={mindhunter} alt="photo Mindhunter" />
          <img className="series" src={sherlock} alt="photo Sherlock" />
          <img className="series" src={breakingbad} alt="photo Breakingbad" />
        </div>
      </div>
    </>
  );
};

export default Series;
