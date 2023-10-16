import styled from "styled-components";

export const WrapperSidebar = styled.div`
  flex: 20%;
  border-right: 4px solid black;
  background-color: #ecf0f3;
  padding: 20px;
`;

export const ContainerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input``;

export const Button = styled.button`
  border: none;
  padding: 7px 10px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #c4acac;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  gap: 2px;
`;
