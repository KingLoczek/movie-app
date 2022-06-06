import React from 'react';
import './BackgroundChar.css';
import Character from '../Character/Character';

const BackgroundChar = ({data}) => {
  return (
    <div className="child_characters">
      <h1>Characters</h1>
      <Character data={data.cast}/>
    </div>
  );
};

export default BackgroundChar;
