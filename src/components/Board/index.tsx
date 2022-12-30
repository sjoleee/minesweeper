import React from "react";

import { useAppSelect } from "../../store";
import Cell from "../Cell";
import * as S from "./styles";

const Board = () => {
  const { boardData } = useAppSelect((state) => state);

  return (
    <S.Container>
      <S.Subtitle>MINESWEEPER</S.Subtitle>
      <S.Title>지뢰찾기</S.Title>
      <S.Board>
        {boardData.map((row, rowIndex) => (
          <S.Row key={rowIndex}>
            {row.map((col, colIndex) => (
              <Cell
                key={rowIndex * row.length + colIndex}
                cellType={col}
                rowIndex={rowIndex}
                colIndex={colIndex}
              />
            ))}
          </S.Row>
        ))}
      </S.Board>
    </S.Container>
  );
};
export default Board;
