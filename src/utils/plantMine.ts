import { CELL_TYPE } from "../constants";

// NOTE: board에 지뢰를 심는 함수
const plantMine = ({
  col,
  minePositionsArr,
  boardData,
}: {
  col: number;
  minePositionsArr: number[];
  boardData: number[][];
}): number[][] => {
  const newBoard = boardData.map((row) => [...row]);
  minePositionsArr.forEach((position) => {
    const ver = Math.floor(position / col);
    const hor = position % col;

    newBoard[ver][hor] = CELL_TYPE.MINE;
  });

  return newBoard;
};

export default plantMine;
