import React, { useState, useEffect } from 'react';
import Scoreboard from './main-components/scoreboard';
import Gameboard from './main-components/gameboard';

const Main = () => {
  const [game, setGame] = useState([
    { score: 0 },
    { highscore: 0 },
    {
      boardArray: [
        { id: 'Helmet', clicked: false },
        { id: 'Shiny-Shield', clicked: false },
        { id: 'Ace', clicked: false },
        { id: 'Castle', clicked: false },
        { id: 'Pierced-Shield', clicked: false },
        { id: 'Terraria', clicked: false },
        { id: 'Arrows', clicked: false },
        { id: 'Treasure', clicked: false },
      ],
    },
  ]);

  useEffect(() => {
    const checkLoss = (e) => {
      const isHighScore = () => {
        if (game[0].score < game[1].highscore) {
          return game[1].highscore;
        } else {
          return game[0].score;
        }
      };

      if (game[2].boardArray[e.target.id].clicked === true) {
        alert('Not quite, try again!');
        setGame([
          { score: 0 },
          { highscore: isHighScore() },
          {
            boardArray: [
              { id: 'Helmet', clicked: false },
              { id: 'Shiny-Shield', clicked: false },
              { id: 'Ace', clicked: false },
              { id: 'Castle', clicked: false },
              { id: 'Pierced-Shield', clicked: false },
              { id: 'Terraria', clicked: false },
              { id: 'Arrows', clicked: false },
              { id: 'Treasure', clicked: false },
            ],
          },
        ]);
        return true;
      } else {
        return;
      }
    };

    const fairMove = (e) => {
      let arrayCopy = game[2].boardArray.slice();
      arrayCopy[e.target.id].clicked = true;

      let currentIndex = arrayCopy.length,
        randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
          arrayCopy[randomIndex],
          arrayCopy[currentIndex],
        ];
      }
      setGame([
        { score: game[0].score + 1 },
        { highscore: game[1].highscore },
        {
          boardArray: arrayCopy,
        },
      ]);
    };

    const checkWin = () => {
      if (
        game[2].boardArray[0].clicked === true &&
        game[2].boardArray[1].clicked === true &&
        game[2].boardArray[2].clicked === true &&
        game[2].boardArray[3].clicked === true &&
        game[2].boardArray[4].clicked === true &&
        game[2].boardArray[5].clicked === true &&
        game[2].boardArray[6].clicked === true &&
        game[2].boardArray[7].clicked === true
      ) {
        alert('You win!');
        setGame([
          { score: 0 },
          { highscore: 8 },
          {
            boardArray: [
              { id: 'Helmet', clicked: false },
              { id: 'Shiny-Shield', clicked: false },
              { id: 'Ace', clicked: false },
              { id: 'Castle', clicked: false },
              { id: 'Pierced-Shield', clicked: false },
              { id: 'Terraria', clicked: false },
              { id: 'Arrows', clicked: false },
              { id: 'Treasure', clicked: false },
            ],
          },
        ]);
        return true;
      }
    };

    const playTurn = (e) => {
      if (checkLoss(e) === true) {
        return;
      }
      fairMove(e);
      if (checkWin() === true) {
        return;
      }
    };

    document
      .querySelectorAll('.gamePiece')
      .forEach((piece) => piece.addEventListener('click', playTurn));

    return () => {
      document
        .querySelectorAll('.gamePiece')
        .forEach((piece) => piece.removeEventListener('click', playTurn));
    };
  }, [game]);

  return (
    <div className="main">
      <Scoreboard currentScore={game[0].score} highscore={game[1].highscore} />
      <Gameboard pieces={game[2].boardArray} />
    </div>
  );
};

export default Main;
