/** 지뢰가 어디에 생성될지 배열로 반환해주는 함수
 * @param {Number} row 보드의 행 갯수
 * @param {Number} col 보드의 열 갯수
 * @param {Number} mine 지뢰의 갯수
 * @returns {Number[]} 지뢰의 위치를 갖는 배열
 */
const createMine = (row: number, col: number, mine: number): number[] => {
  const minePositionsArr = [];

  while (minePositionsArr.length < mine) {
    const minePosition = Math.floor(Math.random() * row * col);
    minePositionsArr.push(minePosition);
  }

  return minePositionsArr;
};

export default createMine;
