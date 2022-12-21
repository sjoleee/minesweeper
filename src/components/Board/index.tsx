import React from "react";

import { useAppSelect } from "../../store";
import Cell from "../Cell";

const Board = () => {
  const { boardData } = useAppSelect((state) => state);

  return (
    <div>
      {boardData.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell
              key={rowIndex * row.length + colIndex}
              col={col}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Board;
