import styled from "styled-components";

export const Button = styled.button<{ isOpen: boolean; isBomb: boolean }>`
  font-size: 12px;
  width: 30px;
  height: 30px;
  background-color: ${({ isOpen, isBomb }) => (isOpen ? "lightGray" : isBomb ? "red" : "gray")};
`;
