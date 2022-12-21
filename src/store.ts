import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const mineSlice = createSlice({
  name: "mineReducer",
  initialState: [],
  reducers: {},
});

const mineStore = configureStore({ reducer: mineSlice.reducer });
// eslint-disable-next-line no-empty-pattern
export const {} = mineSlice.actions;

type RootState = ReturnType<typeof mineStore.getState>;
type AppDispatch = typeof mineStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default mineStore;
