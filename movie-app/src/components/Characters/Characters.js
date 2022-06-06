import React from 'react';
import './Characters.css';
import BackgroundChar from './Background/BackgroundChar';

const Characters = ({ data }) => {
  return (
    <div className="container_characters">
      <BackgroundChar data={data} />
    </div>
  );
};

export default Characters;
