import React from "react";

import { useAppSelect } from "../../store";
import Cell from "../Cell";
import * as S from "./styles";

const Board = () => {
  const { boardData } = useAppSelect((state) => state);

  return (
    <S.Board>
      {boardData.map((row, rowIndex) => (
        <S.Row key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell
              key={rowIndex * row.length + colIndex}
              col={col}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))}
        </S.Row>
      ))}
    </S.Board>
  );
};
export default Board;
