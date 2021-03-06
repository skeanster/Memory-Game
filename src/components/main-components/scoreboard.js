import React from 'react';

const Scoreboard = (props) => {
  const { currentScore, highscore } = props;

  return (
    <div className="scoreboard">
      <div>Current Score: {currentScore}</div>
      <div>High Score: {highscore}</div>
    </div>
  );
};

export default Scoreboard;
