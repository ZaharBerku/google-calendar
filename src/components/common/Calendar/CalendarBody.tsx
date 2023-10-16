import { FC, MouseEvent, useState } from "react";
import { setDate, getYear } from "date-fns";
import { useApi } from "@hooks/index";
import { ModalCreateEvent } from "@components/index";
import { EventsType, ColorEvent, EventType } from "@utils/types";
import { Days } from "./Days";
import {
  WrapperCalendarBody,
  ContainerCalendarBody,
  WrapperGrid,
} from "./index.styled";
import { CalendarBodyProps, Holiday } from "./index.types";

const CalendarBody: FC<CalendarBodyProps> = ({
  date,
  onChange,
  filter,
  setFilterEvents,
}) => {
  const { publicHoliday, events } = useApi();
  const [openCreateEvent, setOpenCreateEvent] = useState(false);
  const [currentEvents, setCurrentEvents] = useState<EventsType | null>(null);
  const currentYear = getYear(date);
  const [selectEvent, setSelectEvent] = useState<
    (EventType & { date: string }) | null
  >(null);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement) {
      const element = event.target.closest("[data-day]");
      const { day } = (element as HTMLElement)?.dataset || {};

      if (day && onChange) {
        const selectDate = setDate(date, +day);
        onChange(selectDate);
      }
    }
  };

  const hadleEditEvent = (selectEvent: EventType, formattedDate: string) => {
    setSelectEvent({ ...selectEvent, date: formattedDate });
    handleOpen();
  };

  const handleOpen = () => {
    setOpenCreateEvent(true);
  };

  const handleClose = () => {
    setOpenCreateEvent(false);
    setSelectEvent(null);
  };

  const handleDobleClick = (event: MouseEvent<HTMLDivElement>) => {
    handleOpen();
  };

  const getEvents = async () => {
    const holiday = await publicHoliday.getPublicHolidays({
      year: currentYear,
    });
    const currentEvents = getCurrentEvents();
    const formatHilday = holiday.reduce((item: EventsType, el: Holiday) => {
      if (!item[el.date]) {
        item[el.date] = [];
      }
      item[el.date] =
        (item[el.date].push({
          title: el.localName,
          color: ColorEvent.COLOR_HOLIDAY,
          id: Date.now(),
        }),
        item[el.date]);

      if (currentEvents[el.date]) {
        item[el.date] = [...item[el.date], ...currentEvents[el.date]];
        delete currentEvents[el.date];
      }
      return item;
    }, {});
    const currentEventsWithHolidays = { ...currentEvents, ...formatHilday };
    setCurrentEvents(currentEventsWithHolidays);
    if (setFilterEvents) {
      setFilterEvents();
    }
  };

  const getCurrentEvents = () => {
    const currentEvents = events.getEvents();
    return currentEvents;
  };

  return (
    <WrapperCalendarBody>
      <ContainerCalendarBody>
        <WrapperGrid onClick={handleClick} onDoubleClick={handleDobleClick}>
          <Days
            date={date}
            hadleEditEvent={hadleEditEvent}
            getEvents={getEvents}
            currentEvents={currentEvents}
            filter={filter}
          />
          {openCreateEvent && (
            <ModalCreateEvent
              selectEvent={selectEvent}
              onClose={handleClose}
              date={date}
              getEvents={getEvents}
            />
          )}
        </WrapperGrid>
      </ContainerCalendarBody>
    </WrapperCalendarBody>
  );
};

export { CalendarBody };
