# 지뢰찾기

[이미지 들어갈 공간]

지뢰찾기 게임


## 🛠 Skills: 개발환경 및 기술스택

- React.js
- TypeScript
- Redux toolkit
- Styled-components
- prettier
- ESLint


## 📂 Directory Structure: 디렉토리 구조
```
src
 ┣ components
 ┃ ┣ Board
 ┃ ┣ Cell
 ┃ ┗ Control
 ┣ constants
 ┣ style
 ┣ utils
 ┃ ┣ countMine.ts
 ┃ ┣ createBoard.ts
 ┃ ┣ createMine.ts
 ┃ ┗ plantMine.ts
 ┣ App.tsx
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┗ store.ts
```

## 🌟 Key Features: 주요 기능 소개

[이미지 들어갈 공간]

- 게임 시작
  - 셀을 클릭 시 자동으로 게임이 시작됨.
  - 처음 셀을 클릭할 때는 지뢰가 터지지 않음.

- 게임 난이도 변경
  - Beginner(8X8), Intermediate(16X16), Expert(32X16), Custom(가로, 세로, 지뢰 수 조정 가능)

- 오른쪽 클릭 깃발, 물음표 기능
- 주변에 지뢰가 없을 경우 한 번에 여러 셀이 열리는 기능
- 게임 승리 및 패배
