import { FC, useEffect, useState, DragEvent } from "react";
import { set, format } from "date-fns";
import { useApi } from "@hooks/index";
import { Cell } from "@components/index";
import { getNumDays } from "@utils/helpers";
import { EventType } from "@utils/types";

import { DaysPorps } from "./index.types";

const Days: FC<DaysPorps> = ({
  date,
  hadleEditEvent,
  getEvents,
  currentEvents,
  filter,
}) => {
  const { events } = useApi();
  const [dragEvent, setDragEvent] = useState<EventType | null>(null);
  const [dragSelectDay, setDragSelectDay] = useState<string | null>(null);
  const {
    numDays,
    prefixDays,
    suffixDays,
    dayInMonth,
    currentYear,
    currentMonth,
  } = getNumDays(date);
  const arrDays = Array.from({ length: numDays });
  const arrLastMonthDays = Array.from({ length: prefixDays });
  const arrNextMonthDays = Array.from({ length: suffixDays });

  const dragStartHandle = (_: DragEvent<HTMLLIElement>, eventDay: EventType) => {
    setDragEvent(eventDay);
  };

  const dragEndHandle = (event: DragEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      const element = event.target.closest("[data-day]");
      const { day } = (element as HTMLLIElement)?.dataset || {};
      if (dragSelectDay && day && dragEvent?.id) {
        const currentDate = getFormatDate(+day);
        const date = getFormatDate(+dragSelectDay);
        events.deleteEvent(currentDate, dragEvent.id);
        events.setEvent(dragEvent, date);
        getEvents();
      }
    }
  };

  const dragHandle = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.target instanceof HTMLElement) {
      const element = event.target.closest("[data-day]");
      const { day } = (element as HTMLLIElement)?.dataset || {};
      if (day) {
        setDragSelectDay(day);
      }
    }
  };

  const getFormatDate = (day: number) => {
    const resultDate = set(new Date(currentYear, currentMonth, day), {
      year: currentYear,
    });
    const formattedDate: string = format(resultDate, "yyyy-MM-dd");
    return formattedDate;
  };

  useEffect(() => {
    getEvents();
  }, [currentYear]);

  return (
    <>
      {arrLastMonthDays.map((_, index) => {
        return <Cell backgroundcolor={"#d6d6d6"} key={index} />;
      })}
      {arrDays.map((_, index) => {
        const DAY = index + 1;
        const isSelectDay = dayInMonth === DAY;
        const formattedDate = getFormatDate(DAY);
        const listEventForThisDate = currentEvents
          ? currentEvents[formattedDate] || []
          : [];

        return (
          <Cell
            listEvents={listEventForThisDate}
            isSelectDay={isSelectDay}
            formattedDate={formattedDate}
            day={DAY}
            key={index}
            hadleEditEvent={hadleEditEvent}
            onDragEnd={dragEndHandle}
            onDragStart={dragStartHandle}
            onDragOver={dragHandle}
            draggable={true}
            filter={filter}
          >
            {DAY}
          </Cell>
        );
      })}
      {arrNextMonthDays.map((_, index) => {
        return <Cell backgroundcolor={"#d6d6d6"} key={index} />;
      })}
    </>
  );
};

export { Days };
