import { FC } from "react";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { ContainerCalendar, WrapperCalendar } from "./index.styled";
import { CalendarProps } from "./index.types";

const Calendar: FC<CalendarProps> = ({ date, onChange = () => {}, filter, setFilterEvents }) => {
  return (
    <ContainerCalendar id={"calendar"}>
      <WrapperCalendar>
        <CalendarHeader date={date} onChange={onChange} />
        <CalendarBody date={date} onChange={onChange} filter={filter} setFilterEvents={setFilterEvents} />
      </WrapperCalendar>
    </ContainerCalendar>
  );
};

export { Calendar };
