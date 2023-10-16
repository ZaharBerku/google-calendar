import { FC } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { format, sub, add } from "date-fns";
import { getDaysOfWeek } from "@utils/helpers";
import { Cell } from "@components/index";
import {
  WrapperCalendarHeader,
  ContainerCalendarHeader,
  WrapperGrid,
  NavigateButton,
  Month,
  WrapperNavigateButtons,
} from "./index.styled";
import { CalendarProps, PaginationCalendarProps } from "./index.types";

const daysOfWeek = getDaysOfWeek();

const Week = () => {
  return (
    <>
      {daysOfWeek.map((day, index) => (
        <Cell backgroundcolor={"#ecf0f3"} key={index}>
          {day}
        </Cell>
      ))}
    </>
  );
};

const PaginationCalendar: FC<PaginationCalendarProps> = ({
  date,
  onChange,
}) => {
  const handlePrevMonth = () => {
    if (onChange) {
      onChange(sub(date, { months: 1 }));
    }
  };

  const handleNextMonth = () => {
    if (onChange) {
      onChange(add(date, { months: 1 }));
    }
  };
  return (
    <WrapperNavigateButtons>
      <NavigateButton onClick={handlePrevMonth}>
        <AiOutlineArrowDown />
      </NavigateButton>
      <NavigateButton onClick={handleNextMonth}>
        <AiOutlineArrowUp />
      </NavigateButton>
    </WrapperNavigateButtons>
  );
};

const CalendarHeader: FC<CalendarProps> = ({ date, onChange }) => {
  const CURRENT_DATE = format(date, "LLLL yyyy");

  return (
    <WrapperCalendarHeader>
      <ContainerCalendarHeader>
        <WrapperGrid>
          <PaginationCalendar date={date} onChange={onChange} />
          <Month>{CURRENT_DATE}</Month>
          <Week />
        </WrapperGrid>
      </ContainerCalendarHeader>
    </WrapperCalendarHeader>
  );
};

export { CalendarHeader };
