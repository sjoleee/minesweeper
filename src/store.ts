import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { CELL_TYPE, COL, GAME_STATUS, ROW } from "./constants";
import createBoard from "./utils/createBoard";

const initialState = {
  boardData: createBoard({ row: ROW, col: COL }),
  timer: 0,
  status: GAME_STATUS.READY,
};

const mineSlice = createSlice({
  name: "mineReducer",
  initialState,
  reducers: {
    // NOTE: 게임을 시작할 때(처음 cell을 클릭할 때) 사용할 리듀서
    start: (state, action) => {
      state.boardData = action.payload.boardData;
      state.status = GAME_STATUS.PLAYING;
    },

    // NOTE: cell을 좌클릭할 때 사용할 리듀서
    open: (state, action) => {
      const { row, col, mineCount } = action.payload;
      const targetCell = state.boardData[row][col];

      if (targetCell === CELL_TYPE.NORMAL || targetCell === CELL_TYPE.QUESTION) {
        state.boardData[row][col] = mineCount;
      }
      if (targetCell === CELL_TYPE.MINE || targetCell === CELL_TYPE.QUESTION_MINE) {
        state.boardData[row][col] = CELL_TYPE.CLICKED_MINE;
        state.status = GAME_STATUS.LOSE;
      }
    },

    // NOTE: cell을 우클릭할 때 사용할 리듀서
    rightClick: (state, action) => {
      const { rowIndex, colIndex } = action.payload;

      // NOTE: 각 cell의 현재 타입을 바탕으로 다음에 올 타입을 지정할 수 있음.
      switch (state.boardData[rowIndex][colIndex]) {
        case CELL_TYPE.NORMAL: {
          state.boardData[rowIndex][colIndex] = CELL_TYPE.FLAG;
          break;
        }
        case CELL_TYPE.MINE: {
          state.boardData[rowIndex][colIndex] = CELL_TYPE.FLAG_MINE;
          break;
        }
        case CELL_TYPE.FLAG: {
          state.boardData[rowIndex][colIndex] = CELL_TYPE.QUESTION;
          break;
        }
        case CELL_TYPE.FLAG_MINE: {
          state.boardData[rowIndex][colIndex] = CELL_TYPE.QUESTION_MINE;
          break;
        }
        case CELL_TYPE.QUESTION: {
          state.boardData[rowIndex][colIndex] = CELL_TYPE.NORMAL;
          break;
        }
        case CELL_TYPE.QUESTION_MINE: {
          state.boardData[rowIndex][colIndex] = CELL_TYPE.MINE;
          break;
        }
        default:
          return;
      }
    },
  },
});

const mineStore = configureStore({ reducer: mineSlice.reducer });
export const { start, open, rightClick } = mineSlice.actions;

type RootState = ReturnType<typeof mineStore.getState>;
type AppDispatch = typeof mineStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default mineStore;
