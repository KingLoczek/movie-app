import React from 'react';
import baner from 'assets/GlownyBaner.svg';
import './Background.css';

const Background = () => {
  return (
    <>
      <div>
        <img className="baner" src={baner} alt="baner" />
      </div>
    </>
  );
};

export default Background;
