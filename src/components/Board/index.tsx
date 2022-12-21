import React from "react";

import { COL, GAME_STATUS, MINE, ROW } from "../../constants";
import { start, useAppDispatch, useAppSelect } from "../../store";
import Cell from "../Cell";

const Board = () => {
  const { boardData } = useAppSelect((state) => state);
  const { status } = useAppSelect((state) => state);
  const dispatch = useAppDispatch();

  const onLeftClick = () => {
    if (status === GAME_STATUS.READY) {
      dispatch(start({ row: ROW, col: COL, mine: MINE }));
    }
  };

  return (
    <>
      {boardData.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell key={rowIndex * row.length + colIndex} col={col} onLeftClick={onLeftClick} />
          ))}
        </tr>
      ))}
    </>
  );
};
export default Board;
