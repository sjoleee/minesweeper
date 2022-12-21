import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { CELL_TYPE, COL, GAME_STATUS, ROW } from "./constants";
import createBoard from "./utils/createBoard";
import createMine from "./utils/createMine";
import plantMine from "./utils/plantMine";

const initialState = {
  boardData: createBoard({ row: ROW, col: COL }),
  timer: 0,
  status: GAME_STATUS.READY,
};

const mineSlice = createSlice({
  name: "mineReducer",
  initialState,
  reducers: {
    start: (state, action) => {
      state.boardData = action.payload.boardData;
      state.status = GAME_STATUS.PLAYING;
    },

    open: (state, action) => {
      const { row, col } = action.payload;
      const targetCell = state.boardData[row][col];

      if (targetCell === CELL_TYPE.NORMAL || targetCell === CELL_TYPE.QUESTION) {
        state.boardData[row][col] = CELL_TYPE.OPENED;
      }
      if (targetCell === CELL_TYPE.MINE || targetCell === CELL_TYPE.QUESTION_MINE) {
        state.boardData[row][col] = CELL_TYPE.CLICKED_MINE;
        state.status = GAME_STATUS.LOSE;
      }
    },
  },
});

const mineStore = configureStore({ reducer: mineSlice.reducer });
export const { start, open } = mineSlice.actions;

type RootState = ReturnType<typeof mineStore.getState>;
type AppDispatch = typeof mineStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default mineStore;
