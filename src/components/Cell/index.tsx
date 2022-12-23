import React from "react";

import { CELL_TYPE, GAME_STATUS } from "../../constants";
import { open, rightClick, start, useAppDispatch, useAppSelect } from "../../store";
import countMine from "../../utils/countMine";
import createMine from "../../utils/createMine";
import plantMine from "../../utils/plantMine";
import * as S from "./styles";

const Cell = ({
  cellType,
  rowIndex,
  colIndex,
}: {
  cellType: number;
  rowIndex: number;
  colIndex: number;
}) => {
  const { status } = useAppSelect((state) => state);
  const { boardData } = useAppSelect((state) => state);
  const { rowCount, colCount, mineCount } = useAppSelect((state) => state.size);
  const dispatch = useAppDispatch();

  // NOTE: cell에 들어갈 텍스트를 반환하는 함수
  const getText = (code: number) => {
    switch (code) {
      case CELL_TYPE.NORMAL:
        return "";
      case CELL_TYPE.MINE:
        return "";
      case CELL_TYPE.CLICKED_MINE:
        return "💣";
      case CELL_TYPE.FLAG_MINE:
      case CELL_TYPE.FLAG:
        return "🚩";
      case CELL_TYPE.QUESTION_MINE:
      case CELL_TYPE.QUESTION:
        return "?";
      default:
        return code || "";
    }
  };

  // NOTE: 이미 열었던 칸은 제외하고 연산하기 위한 캐싱 배열
  const checked: string[] = [];

  // NOTE: 이웃한 칸들을 체크하여 한 번에 열어주는 함수
  const checkAround = ({
    row,
    col,
    boardData,
  }: {
    row: number;
    col: number;
    boardData: number[][];
  }) => {
    // NOTE: 상하좌우가 없는 칸은 열지 않는다
    if (row < 0 || row >= boardData.length || col < 0 || col >= boardData[0].length) {
      return;
    }

    // NOTE: 닫혀있는 칸만 연다
    if (
      [
        CELL_TYPE.OPENED,
        CELL_TYPE.FLAG,
        CELL_TYPE.FLAG_MINE,
        CELL_TYPE.QUESTION_MINE,
        CELL_TYPE.QUESTION,
      ].includes(boardData[row][col])
    ) {
      return;
    }

    // NOTE: 한 번 열었던 칸은 연산에서 제외한다
    if (checked.includes(row + "/" + col)) {
      return;
    }
    checked.push(row + "/" + col);

    // NOTE: 이웃한 cell의 지뢰 갯수
    const count = countMine({ row, col, boardData });

    // NOTE: 이웃한 cell에 지뢰가 없을 경우
    if (count === 0) {
      if (row > -1) {
        const near = [];
        if (row - 1 > -1) {
          near.push([row - 1, col - 1]);
          near.push([row - 1, col]);
          near.push([row - 1, col + 1]);
        }
        near.push([row, col - 1]);
        near.push([row, col + 1]);
        if (row + 1 < boardData.length) {
          near.push([row + 1, col - 1]);
          near.push([row + 1, col]);
          near.push([row + 1, col + 1]);
        }
        near.forEach((n) => {
          // NOTE: 이미 열린 cell은 제외하고 재귀 호출로 여러 칸을 열 수 있음
          if (boardData[n[0]][n[1]] !== CELL_TYPE.OPENED) {
            checkAround({ row: n[0], col: n[1], boardData });
          }
        });
      }
    }

    dispatch(open({ row, col, mineCount: count }));
  };

  // NOTE: 마우스 좌클릭시 호출할 함수
  const onLeftClick = (currentPosition: number) => {
    // NOTE: 처음 클릭하는 경우라면 보드에 지뢰를 생성하며 시작한다
    if (status === GAME_STATUS.READY) {
      const minePositionsArr = createMine({
        row: rowCount,
        col: colCount,
        mine: mineCount,
        currentPosition,
      });

      // NOTE: setter가 비동기로 동작하므로 별도의 startingBoard를 생성하여 로직에 활용한다.
      const startingBoard = plantMine({
        col: colCount,
        minePositionsArr,
        boardData,
      });
      dispatch(start({ boardData: startingBoard }));

      // NOTE: 첫 클릭에서는 startingBoard를 사용하여 지뢰 갯수를 센다.
      checkAround({ row: rowIndex, col: colIndex, boardData: startingBoard });
    } else {
      // NOTE: 첫 클릭이 아닐경우

      // NOTE: 클릭한 cell이 지뢰가 아닐경우
      if (cellType === CELL_TYPE.NORMAL) {
        checkAround({ row: rowIndex, col: colIndex, boardData });
      }

      // NOTE: 클릭한 cell이 지뢰일 경우
      if (cellType === CELL_TYPE.MINE) {
        dispatch(open({ row: rowIndex, col: colIndex }));
      }
    }
  };

  // NOTE: 마우스 우클릭시 호출할 함수
  const onRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // NOTE: rightClick에서 분기처리하여 cell 타입을 변경해줌
    dispatch(rightClick({ rowIndex, colIndex }));
  };

  return (
    <S.Button
      onClick={() => {
        onLeftClick(rowIndex * colCount + colIndex);
      }}
      onContextMenu={(e) => {
        onRightClick(e);
      }}
      isOpen={cellType >= CELL_TYPE.OPENED}
      isBomb={cellType === CELL_TYPE.CLICKED_MINE}
      disabled={status === GAME_STATUS.LOSE || status === GAME_STATUS.WIN}
    >
      {getText(cellType)}
    </S.Button>
  );
};

export default Cell;
