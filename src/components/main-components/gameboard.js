import React from 'react';

const Gameboard = (props) => {
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
            <div class="piecePicture" id={'picture' + piece.id}></div>
            <div class="pieceTitle">{piece.id}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Gameboard;
