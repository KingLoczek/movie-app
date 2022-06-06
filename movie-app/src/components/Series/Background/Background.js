import React from 'react';
import mindHunterBaner from 'assets/Mindhunter/MindhunterBaner.svg';
import sherlockBaner from 'assets/Sherlock/SherlockBaner.svg';
import breakingBadBaner from 'assets/Breakingbad/BreakingBadBaner.svg';
import { useLocation } from 'react-router-dom';

const Background = () => {
  const Location = useLocation();

  let Baner;
  if (Location.pathname == '/mindhunter') {
    Baner = mindHunterBaner;
  } else if (Location.pathname == '/sherlock') {
    Baner = sherlockBaner;
  } else if (Location.pathname == '/breakingbad') {
    Baner = breakingBadBaner;
  }
  return (
    <>
      <div>
        <img className="baner" src={Baner} alt="baner" />
      </div>
    </>
  );
};

export default Background;
