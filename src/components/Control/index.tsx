import React, { useEffect, useState } from "react";

import { resize, useAppDispatch, useAppSelect } from "../../store";
import * as S from "./styles";

const Control = () => {
  const [customCol, setCustomCol] = useState<number>(0);
  const [customRow, setCustomRow] = useState<number>(0);
  const [customMine, setCustomMine] = useState<number>(0);
  const dispatch = useAppDispatch();

  const { rowCount, colCount, mineCount } = useAppSelect((state) => state.size);

  useEffect(() => {
    dispatch(resize({ rowCount: 8, colCount: 8, mineCount: 10 }));
  }, []);

  return (
    <S.Container>
      <div>
        <S.Button
          type="button"
          reset
          onClick={() => {
            dispatch(resize({ rowCount, colCount, mineCount }));
          }}
        >
          Reset
        </S.Button>
      </div>
      <S.LevelContainer>
        LEVEL
        <S.Button
          type="button"
          onClick={() => {
            dispatch(resize({ rowCount: 8, colCount: 8, mineCount: 10 }));
          }}
        >
          Beginner
        </S.Button>
        <S.Button
          type="button"
          onClick={() => {
            dispatch(resize({ rowCount: 16, colCount: 16, mineCount: 40 }));
          }}
        >
          Intermediate
        </S.Button>
        <S.Button
          type="button"
          onClick={() => {
            dispatch(resize({ rowCount: 16, colCount: 32, mineCount: 100 }));
          }}
        >
          Expert
        </S.Button>
      </S.LevelContainer>
      <S.CustomContainer>
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
          />
        </div>
        <div>
          mine count:
          <S.Input
            type="number"
            value={customMine}
            onChange={(e) => {
              setCustomMine(Number(e.target.value));
            }}
          />
        </div>
        <S.Button
          type="button"
          onClick={() => {
            dispatch(resize({ rowCount: customRow, colCount: customCol, mineCount: customMine }));
          }}
        >
          Custom
        </S.Button>
      </S.CustomContainer>
    </S.Container>
  );
};

export default Control;
