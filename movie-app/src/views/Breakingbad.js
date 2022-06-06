import React from 'react';
import Background from 'components/Series/Background/Background';
import Trailer from 'components/Series/Trailer/Trailer';
import Overview from 'components/Series/Overview/Overview';
import Characters from 'components/Characters/Characters';

const Breakingbad = () => {
  return (
    <>
      <Background />
      <Trailer />
      <Overview />
      <Characters />
    </>
  );
};

export default Breakingbad;
