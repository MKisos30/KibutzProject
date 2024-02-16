import React from 'react';
import DavningTime from './Components/DavningTime';
import DvarTorahText from './Components/DvarTorahText';
import ShabbatTime from './Components/ShabbatTime';
import Update from './Components/Update';

const HomePage = () => {
  return (
    <div>
      <ShabbatTime />

      <DvarTorahText />

      <DavningTime />
      <Update />
    </div>
  );
};

export default HomePage;
