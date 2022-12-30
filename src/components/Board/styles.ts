import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  margin: 8px 0;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  text-shadow: -0.5px 0 whitesmoke, 0 0.5px whitesmoke, 0.5px 0 whitesmoke, 0 -0.5px whitesmoke;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-shadow: -0.5px 0 whitesmoke, 0 0.5px whitesmoke, 0.5px 0 whitesmoke, 0 -0.5px whitesmoke;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
