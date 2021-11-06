import React, { useState, useEffect } from 'react';
import Scoreboard from './main-components/scoreboard';
import Gameboard from './main-components/gameboard';

const Main = () => {
  const [,] = useState();

  useEffect(() => {}, []);

  return (
    <div className="main">
      <Scoreboard />
      <Gameboard />
    </div>
  );
};

export default Main;
