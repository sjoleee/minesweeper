import { CELL_TYPE } from "../constants";

// NOTE: 클릭한 cell 기준, 주변에 몇개의 지뢰가 있는지 갯수를 반환하는 함수
const countMine = ({
  row,
  col,
  boardData,
}: {
  row: number;
  col: number;
  boardData: number[][];
}) => {
  // NOTE: 이웃한 cell의 CELL_TYPE을 담을 배열
  let neighborCells: number[] = [];
  let mineCount = 0;

  // NOTE: 위 3개
  neighborCells = boardData[row - 1]
    ? neighborCells.concat(
        boardData[row - 1][col - 1],
        boardData[row - 1][col],
        boardData[row - 1][col + 1],
      )
    : neighborCells;

  // NOTE: 양 옆
  neighborCells = neighborCells.concat(boardData[row][col - 1], boardData[row][col + 1]);

  // NOTE: 아래 3개
  neighborCells = boardData[row + 1]
    ? neighborCells.concat(
        boardData[row + 1][col - 1],
        boardData[row + 1][col],
        boardData[row + 1][col + 1],
      )
    : neighborCells;

  // NOTE: neighborCells 배열의 원소 중 지뢰인 원소의 갯수
  mineCount = neighborCells.filter((v) =>
    [CELL_TYPE.MINE, CELL_TYPE.CLICKED_MINE, CELL_TYPE.FLAG_MINE, CELL_TYPE.QUESTION_MINE].includes(
      v,
    ),
  ).length;

  return mineCount;
};

export default countMine;
