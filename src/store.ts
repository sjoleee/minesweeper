import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { COL, GAME_STATUS, ROW } from "./constants";
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
      const { row, col, mine, currentPosition } = action.payload;
      const minePositionsArr = createMine({ row, col, mine, currentPosition });
      state.boardData = plantMine({
        col,
        minePositionsArr,
        boardData: state.boardData,
      });
      state.status = GAME_STATUS.PLAYING;
    },
  },
});

const mineStore = configureStore({ reducer: mineSlice.reducer });
// eslint-disable-next-line no-empty-pattern
export const { start } = mineSlice.actions;

type RootState = ReturnType<typeof mineStore.getState>;
type AppDispatch = typeof mineStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default mineStore;
