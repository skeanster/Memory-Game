import React, { useState, useEffect } from 'react';
import Scoreboard from './main-components/scoreboard';
import Gameboard from './main-components/gameboard';

const Main = () => {
  const [score, setScore] = useState(0);
  const [pieces, setPieces] = useState([
    { id: '0', clicked: false },
    { id: '1', clicked: false },
    { id: '2', clicked: false },
    { id: '3', clicked: false },
    { id: '4', clicked: false },
    { id: '5', clicked: false },
    { id: '6', clicked: false },
    { id: '7', clicked: false },
  ]);

  useEffect(() => {
    const upScore = () => {
      setScore(score + 1);
    };

    document
      .querySelectorAll('.gamePiece')
      .forEach((piece) => piece.addEventListener('click', upScore));

    return () => {
      document
        .querySelectorAll('.gamePiece')
        .forEach((piece) => piece.removeEventListener('click', upScore));
    };
  }, [score]);

  useEffect(() => {
    const shuffle = () => {
      let currentIndex = pieces.length,
        randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [pieces[currentIndex], pieces[randomIndex]] = [
          pieces[randomIndex],
          pieces[currentIndex],
        ];
      }

      setPieces(pieces);
    };

    const checkLoss = (a) => {
      if (pieces[a.target.id].clicked === true) {
        alert('lose');
      } else {
        return;
      }
    };

    const checkWin = (b) => {
      if (
        pieces[0].clicked === true &&
        pieces[1].clicked === true &&
        pieces[2].clicked === true &&
        pieces[3].clicked === true &&
        pieces[4].clicked === true &&
        pieces[5].clicked === true &&
        pieces[6].clicked === true &&
        pieces[7].clicked === true
      ) {
        alert('win');
      }
    };

    const playTurn = (e) => {
      checkLoss(e);
      pieces[e.target.id].clicked = true;
      checkWin(e);
      shuffle();
      console.log(pieces);
    };

    document
      .querySelectorAll('.gamePiece')
      .forEach((piece) => piece.addEventListener('click', playTurn));

    return () => {
      document
        .querySelectorAll('.gamePiece')
        .forEach((piece) => piece.addEventListener('click', playTurn));
    };
  }, [pieces]);

  return (
    <div className="main">
      <Scoreboard currentScore={score} />
      <Gameboard pieces={pieces} />
    </div>
  );
};

export default Main;
