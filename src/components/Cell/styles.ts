import styled from "styled-components";

export const Button = styled.button<{ isOpen: boolean }>`
  font-size: 10px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: ${({ isOpen }) => (isOpen ? "white" : "gray")};
`;
