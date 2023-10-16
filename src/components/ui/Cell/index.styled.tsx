import styled from "styled-components";

export const CellElement = styled.div<{
  $backgroundcolor?: string;
  $isSelectDay?: boolean;
}>`
  background-color: ${(props) =>
    props.$isSelectDay ? "#81bdeb" : props.$backgroundcolor || "#e2e6e9"};
  border: ${(props) =>
    props.$isSelectDay ? "1px solid #2438ee" : "1px solid transparent"};
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
`;

export const List = styled.ul`
  overflow-y: auto;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 10px;
  height: 70%;
`;

export const Item = styled.li<{ $color: string; $isHoliday: boolean }>`
  font-size: 12px;
  display: flex;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  margin: 0px;
  padding: 2px;
  cursor: ${(props) => (props.$isHoliday ? "none" : "pointer")};
  background-color: ${(props) => (props.$isHoliday ? "blue" : "transparent")};
  color: ${(props) => (props.$isHoliday ? "white" : "black")};
  &:before {
    content: "";
    display: ${(props) => (props.$isHoliday ? "none" : "block")};
    height: 5px;
    width: 20px;
    border-radius: 20px;
    background-color: ${(props) => props.$color || "#128be7"};
  }
  &:hover {
    background-color: ${(props) => (props.$isHoliday ? "blue" : "#b9bbbc")};
  }
`;
