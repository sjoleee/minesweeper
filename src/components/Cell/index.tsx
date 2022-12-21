import React from "react";

import * as S from "./styles";

const Cell = ({ col, onLeftClick }: { col: number; onLeftClick: () => void }) => (
  <S.Button onClick={onLeftClick}>{col}</S.Button>
);

export default Cell;
