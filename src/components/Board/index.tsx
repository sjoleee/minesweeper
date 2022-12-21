import React from "react";

import { COL, GAME_STATUS, MINE, ROW } from "../../constants";
import { start, useAppDispatch, useAppSelect } from "../../store";
import Cell from "../Cell";

const Board = () => {
  const { boardData } = useAppSelect((state) => state);
  const { status } = useAppSelect((state) => state);
  const dispatch = useAppDispatch();

  const onLeftClick = (currentPosition: number) => {
    if (status === GAME_STATUS.READY) {
      dispatch(start({ row: ROW, col: COL, mine: MINE, currentPosition }));
    }
  };

  return (
    <div>
      {boardData.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell
              key={rowIndex * row.length + colIndex}
              col={col}
              onLeftClick={() => {
                onLeftClick(rowIndex * row.length + colIndex);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Board;
