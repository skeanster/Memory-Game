import React, { useState, useEffect } from 'react';

const Gameboard = () => {
  const [,] = useState();

  useEffect(() => {}, []);

  return (
    <div className="gameboard">
      <div class="gamePiece">
        <div class="piecePicture">
          <img
            alt="frog"
            src="https://img.icons8.com/ios/50/000000/frog-face--v2.png"
          />
        </div>
        <div class="pieceTitle">Title</div>
      </div>
      <div class="gamePiece">piece</div>
      <div class="gamePiece">piece</div>
      <div class="gamePiece">piece</div>
      <div class="gamePiece">piece</div>
      <div class="gamePiece">piece</div>
      <div class="gamePiece">piece</div>
      <div class="gamePiece">piece</div>
    </div>
  );
};

export default Gameboard;
