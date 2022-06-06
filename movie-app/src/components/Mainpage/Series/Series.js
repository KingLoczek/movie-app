import React from 'react';
import mindhunter from '../../../assets/Mindhunter/mindhunter.png';
import sherlock from '../../../assets/Sherlock/sherlock.png';
import breakingbad from '../../../assets/Breakingbad/breakingbad.jpg';
import './Series.css';
import { Link } from 'react-router-dom';

const Series = () => {
  return (
    <>
      <div className="container">
        <div className="child">
          <Link to="/mindhunter">
            <img className="series" src={mindhunter} alt="photo Mindhunter" />
          </Link>
          <Link to="/sherlock">
            <img className="series" src={sherlock} alt="photo Sherlock" />
          </Link>
          <Link to="/breakingbad">
            <img className="series" src={breakingbad} alt="photo Breakingbad" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Series;
