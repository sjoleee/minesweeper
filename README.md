# 지뢰찾기

![지뢰찾기](https://user-images.githubusercontent.com/82137004/210134859-c6079618-a5bb-4b69-90c9-dd6d6f31a82c.png)


- [지뢰찾기 Web](https://minesweeper-sjoleee.vercel.app/)


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

### 게임 시작
![시작](https://user-images.githubusercontent.com/82137004/210135190-22c2f1b3-ea78-4bc7-830f-e46eebb021a5.gif)

- 셀을 클릭 시 자동으로 게임이 시작됨.
  - 처음 셀을 클릭할 때는 지뢰가 터지지 않음.


### 게임 난이도 변경
![변경](https://user-images.githubusercontent.com/82137004/210135197-b2675523-dd3e-4e99-b2f6-a84f157e2aa8.gif)

- Beginner(8X8), Intermediate(16X16), Expert(32X16), Custom(가로, 세로, 지뢰 수 조정 가능)

### 우클릭
![우클릭](https://user-images.githubusercontent.com/82137004/210135199-273da802-0f2f-4c51-87e4-44b80d65403d.gif)

- 오른쪽 클릭 깃발, 물음표 기능

### 여러 셀 자동 오픈
![다켜지기](https://user-images.githubusercontent.com/82137004/210135200-d163d087-332c-4105-8364-26bde9aa6461.gif)

- 주변에 지뢰가 없을 경우 한 번에 여러 셀이 열리는 기능

### 승리 및 패배
![패배](https://user-images.githubusercontent.com/82137004/210135204-b00fed2c-8d21-4545-8496-a8440799b987.gif)

- 게임 승리 및 패배
