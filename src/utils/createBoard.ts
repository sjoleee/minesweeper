import { CELL_TYPE } from "../components/Board";

/** 보드를 생성하고 지뢰를 심는 함수
 * @param {Number} row 보드의 행 갯수
 * @param {Number} col 보드의 열 갯수
 * @param {Number[]} minePositionsArr 지뢰의 위치를 갖는 배열
 * @returns {Number[][]} 지뢰의 위치를 포함한 이차원 배열 보드
 */
const createBoard = (row: number, col: number, minePositionsArr: number[]) => {
  const boardData: number[][] = [];

  for (let i = 0; i < row; i++) {
    const rowData = [];
    for (let j = 0; j < col; j++) {
      rowData.push(CELL_TYPE.NORMAL);
    }
    boardData.push(rowData);
  }

  minePositionsArr.forEach((position) => {
    const ver = Math.floor(position / col);
    const hor = position % col;
    boardData[ver][hor] = CELL_TYPE.MINE;
  });

  return boardData;
};

export default createBoard;
