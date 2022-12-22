export enum CELL_TYPE {
  NORMAL = -1,
  QUESTION = -2,
  FLAG = -3,
  QUESTION_MINE = -4,
  FLAG_MINE = -5,
  MINE = -6,
  CLICKED_MINE = -7,
  OPENED = 0,
}

export enum GAME_STATUS {
  READY = "READY",
  PLAYING = "PLAYING",
  WIN = "WIN",
  LOSE = "LOSE",
}

export const ROW = 10;
export const COL = 10;
export const MINE = 10;
