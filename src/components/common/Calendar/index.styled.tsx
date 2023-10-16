import styled from "styled-components";

//Shared
export const WrapperGrid = styled.div<{ aligned?: string }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: 1fr;
  height: 100%;
  align-items: ${(props) => props.aligned || "center"};
  justify-items: ${(props) => props.aligned || "center"};
  gap: 5px;
`;

//Root
export const WrapperCalendar = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerCalendar = styled.div`
  width: 100%;
`;

//Header
export const WrapperCalendarHeader = styled.div`
  width: 100%;
  height: 15%;
  background-color: #ecf0f3;
`;

export const ContainerCalendarHeader = styled.div`
  height: 100%;
`;

export const WrapperNavigateButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavigateButton = styled.button`
  border: 1px solid #a0a0a0;
  border-radius: 10%;
  height: 30px;
  width: 30px;
`;

export const Month = styled.h3`
  font-size: 20px;
  font-weight: 700;
  grid-column-start: 2;
  grid-column-end: 9;
`;

//Body
export const WrapperCalendarBody = styled.div`
  height: 100%;
  width: 100%;
`;

export const ContainerCalendarBody = styled.div`
  height: 100%;
  width: 100%;
`;
