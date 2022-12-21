// NOTE: 전체 cell 중에서 지뢰가 들어갈 위치를 배열로 반환하는 함수
const createMine = ({
  row,
  col,
  mine,
  currentPosition,
}: {
  row: number;
  col: number;
  mine: number;
  currentPosition: number;
}): number[] => {
  const minePositionsArr: number[] = [];

  while (minePositionsArr.length < mine) {
    const minePosition = Math.floor(Math.random() * row * col);
    if (!minePositionsArr.includes(minePosition)) {
      // NOTE: 클릭한 위치는 제외하고 나머지 위치에서만 지뢰가 생성된다
      if (minePosition !== currentPosition) minePositionsArr.push(minePosition);
    }
  }

  return minePositionsArr;
};

export default createMine;
