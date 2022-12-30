import React from "react";

import Board from "./components/Board";
import Control from "./components/Control";
import * as S from "./styles";

const App = () => (
  <S.Container>
    <Board />
    <Control />
  </S.Container>
);

export default App;
