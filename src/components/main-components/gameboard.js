import React, { useState, useEffect } from 'react';

const Gameboard = (props) => {
  const [,] = useState();

  useEffect(() => {}, []);

  const { pieces } = props;

  let id = -1;
  const iterateId = () => {
    id++;
    return id;
  };

  return (
    <div className="gameboard">
      {pieces.map((piece) => {
        return (
          <div key={piece.id} id={iterateId()} class="gamePiece">
            <div class="piecePicture">
              <img
                alt="frog"
                src="https://img.icons8.com/ios/50/000000/frog-face--v2.png"
              />
            </div>
            <div class="pieceTitle">{piece.id}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Gameboard;
