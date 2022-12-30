import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: fit-content;
`;

export const Input = styled.input`
  width: 40px;
  background-color: gray;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-family: "Galmuri7";
  color: whitesmoke;
  padding-left: 8px;
`;

export const Button = styled.button<{ reset?: boolean }>`
  background-color: ${({ reset }) => (reset ? "darkgreen" : "gray")};
  border: none;
  border-radius: 4px;
  color: whitesmoke;
  font-size: 12px;
  font-family: "Galmuri7";
  cursor: pointer;
  width: fit-content;
`;

export const LevelContainer = styled.div`
  font-size: 12px;
  font-family: "Galmuri7";
  display: flex;
  gap: 8px;
  align-items: center;
  color: whitesmoke;
`;

export const CustomContainer = styled.div`
  font-size: 12px;
  font-family: "Galmuri7";
  display: flex;
  flex-direction: column;
  border: 1px dotted whitesmoke;
  padding: 8px;
  color: whitesmoke;
`;
