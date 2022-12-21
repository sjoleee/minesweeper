import React, { useState } from "react";

import { CELL_TYPE, COL, GAME_STATUS, MINE, ROW } from "../../constants";
import { open, start, useAppDispatch, useAppSelect } from "../../store";
import countMine from "../../utils/countMine";
import createMine from "../../utils/createMine";
import plantMine from "../../utils/plantMine";
import * as S from "./styles";

const Cell = ({ col, rowIndex, colIndex }: { col: number; rowIndex: number; colIndex: number }) => {
  const [mineCount, setMineCount] = useState<number>();
  const { status } = useAppSelect((state) => state);
  const { boardData } = useAppSelect((state) => state);
  const dispatch = useAppDispatch();

  // NOTE: 좌클릭시 호출할 함수
  const onLeftClick = (currentPosition: number) => {
    // NOTE: 처음 클릭하는 경우라면 보드에 지뢰를 생성하며 시작한다
    if (status === GAME_STATUS.READY) {
      const minePositionsArr = createMine({
        row: ROW,
        col: COL,
        mine: MINE,
        currentPosition,
      });

      // NOTE: setter가 비동기로 동작하므로 별도의 startingBoard를 생성하여 로직에 활용한다.
      const startingBoard = plantMine({
        col: COL,
        minePositionsArr,
        boardData,
      });

      dispatch(start({ boardData: startingBoard }));
      // NOTE: 첫 클릭에서는 startingBoard를 사용하여 지뢰 갯수를 센다.
      setMineCount(countMine({ row: rowIndex, col: colIndex, boardData: startingBoard }));
      dispatch(open({ row: rowIndex, col: colIndex }));
    } else {
      // NOTE: 첫 클릭이 아닐경우

      // NOTE: 클릭한 cell이 지뢰가 아닐경우
      if (col === CELL_TYPE.NORMAL) {
        setMineCount(countMine({ row: rowIndex, col: colIndex, boardData }));
        dispatch(open({ row: rowIndex, col: colIndex }));
      }

      // NOTE: 클릭한 cell이 지뢰일 경우
      if (col === CELL_TYPE.MINE) {
        dispatch(open({ row: rowIndex, col: colIndex }));
      }
    }
  };
  return (
    <S.Button
      onClick={() => {
        onLeftClick(rowIndex * COL + colIndex);
      }}
    >
      {col === CELL_TYPE.CLICKED_MINE ? "펑" : null}
      {col === CELL_TYPE.NORMAL ? "" : null}
      {col === CELL_TYPE.OPENED ? mineCount : null}
    </S.Button>
  );
};

export default Cell;
