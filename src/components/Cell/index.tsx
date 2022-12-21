import React from "react";

import * as S from "./styles";

const Cell = ({ col }: { col: number }) => <S.Td>{col}</S.Td>;

export default Cell;
