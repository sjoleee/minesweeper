import React, { useEffect, useState } from "react";

import { resize, useAppDispatch } from "../../store";
import * as S from "./styles";

const Control = () => {
  const [customCol, setCustomCol] = useState<number>(0);
  const [customRow, setCustomRow] = useState<number>(0);
  const [customMine, setCustomMine] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resize({ rowCount: 8, colCount: 8, mineCount: 10 }));
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(resize({ rowCount: 8, colCount: 8, mineCount: 10 }));
        }}
      >
        Beginner
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(resize({ rowCount: 16, colCount: 16, mineCount: 40 }));
        }}
      >
        Intermediate
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(resize({ rowCount: 16, colCount: 32, mineCount: 100 }));
        }}
      >
        Expert
      </button>
      <div>
        board size :
        <S.Input
          type="number"
          value={customCol}
          onChange={(e) => {
            setCustomCol(Number(e.target.value));
          }}
        />{" "}
        X
        <S.Input
          type="number"
          value={customRow}
          onChange={(e) => {
            setCustomRow(Number(e.target.value));
          }}
        />{" "}
        mine count:
        <S.Input
          type="number"
          value={customMine}
          onChange={(e) => {
            setCustomMine(Number(e.target.value));
          }}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(resize({ rowCount: customRow, colCount: customCol, mineCount: customMine }));
          }}
        >
          Custom
        </button>
      </div>
    </>
  );
};

export default Control;
