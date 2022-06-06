import React from 'react';
import './Character.css';
import breakingbad from 'assets/Breakingbad/breakingbad.jpg';

const Character = () => {
  return (
    <div className="container_character">
      <div className="child_character">
        <img className="character" src={breakingbad} />
      </div>
      <div className="child_character">
        <img className="character" src={breakingbad} />
      </div>
      <div className="child_character">
        <img className="character" src={breakingbad} />
      </div>
      <div className="child_character">
        <img className="character" src={breakingbad} />
      </div>
    </div>
  );
};

export default Character;
