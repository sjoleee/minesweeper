import React from "react";

const Board = () => {
  const row = 10;
  const col = 10;
  const mine = 10;

  enum CELL_TYPE {
    NORMAL = -1,
    QUESTION = -2,
    FLAG = -3,
    QUESTION_MINE = -4,
    FLAG_MINE = -5,
    MINE = -6,
    OPENED = 0,
  }

  const createMine = () => {
    const flatBoard = Array(row * col)
      .fill("")
      .map((item, index) => index);
    const minePositionsArr = [];

    while (minePositionsArr.length < mine) {
      const minePosition = flatBoard.splice(Math.floor(Math.random() * flatBoard.length), 1)[0];
      minePositionsArr.push(minePosition);
    }

    const boardData: number[][] = [];
    for (let i = 0; i < row; i++) {
      const rowData = [];
      for (let j = 0; j < col; j++) {
        rowData.push(CELL_TYPE.NORMAL);
      }
      boardData.push(rowData);
    }

    minePositionsArr.forEach((position) => {
      const ver = Math.floor(position / col);
      const hor = position % col;
      boardData[ver][hor] = CELL_TYPE.MINE;
    });
  };

  return <>Board</>;
};
export default Board;
