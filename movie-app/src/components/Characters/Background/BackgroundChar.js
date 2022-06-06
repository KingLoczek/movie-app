import React from 'react';
import './BackgroundChar.css';
import Character from '../Character/Character';

const BackgroundChar = () => {
  return (
    <div className="child_characters">
      <h1>Characters</h1>
      <Character />
    </div>
  );
};

export default BackgroundChar;
