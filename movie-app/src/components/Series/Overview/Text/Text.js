import React from 'react';
import './Text.css';
import seriesDescription from 'data/SeriesDescription';
import { useLocation } from 'react-router-dom';

const Text = () => {
  const Location = useLocation();

  let Description;
  if (Location.pathname == '/mindhunter') {
    Description = seriesDescription.mindhunterDescription;
  } else if (Location.pathname == '/sherlock') {
    Description = seriesDescription.sherlockDescription;
  } else if (Location.pathname == '/breakingbad') {
    Description = seriesDescription.breakingbadDescription;
  }
  return (
    <div className='container_text'>
      <h1>Overview</h1>
      <div>
        <span>{Description}</span>
        <span></span>
      </div>
    </div>
  );
};

export default Text;
