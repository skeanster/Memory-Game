import React, { useState, useEffect } from 'react';

const Scoreboard = (props) => {
  const [,] = useState();

  useEffect(() => {}, []);

  const { currentScore } = props;

  return (
    <div className="scoreboard">
      <div>Current Score: {currentScore}</div>
      <div>High Score: 0</div>
    </div>
  );
};

export default Scoreboard;
