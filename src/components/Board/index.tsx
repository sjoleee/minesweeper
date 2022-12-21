import React from "react";

import createBoard from "../../utils/createBoard";
import createMine from "../../utils/createMine";
import Cell from "../Cell";

export enum CELL_TYPE {
  NORMAL = -1,
  QUESTION = -2,
  FLAG = -3,
  QUESTION_MINE = -4,
  FLAG_MINE = -5,
  MINE = -6,
  OPENED = 0,
}

const Board = () => {
  const row = 10;
  const col = 10;
  const mine = 10;

  const minePositionsArr = createMine(row, col, mine);
  const data = createBoard(row, col, minePositionsArr);

  return (
    <>
      {data.map((row, index) => (
        <tr key={index}>
          {row.map((col, index) => (
            <Cell key={index} col={col} />
          ))}
        </tr>
      ))}
    </>
  );
};
export default Board;
