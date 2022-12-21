import { CELL_TYPE } from "../constants";

// NOTE: row * col 크기의 board 이차원 배열을 생성하는 함수
const createBoard = ({ row, col }: { row: number; col: number }) => {
  const boardData: number[][] = [];

  for (let i = 0; i < row; i++) {
    const rowData = [];
    for (let j = 0; j < col; j++) {
      rowData.push(CELL_TYPE.NORMAL);
    }
    boardData.push(rowData);
  }

  return boardData;
};

export default createBoard;
