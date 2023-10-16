import { useEffect, useState } from "react";
import { Calendar, Sidebar } from "@components/index";
import { useApi } from "@hooks/index";
import { EventsType, EventType } from "@utils/types";
import { WrapperGoogleCalendar, ContainerGoogleCalendar } from "./index.styled";

const DATE = new Date();

const GoogleCalendar = () => {
  const { events } = useApi();
  const [filter, setFilter] = useState<{ [color: string]: boolean } | null>(
    null
  );
  const [currentDate, setCurrentDate] = useState(DATE);
  const handleClick = (date: Date) => {
    setCurrentDate(date);
  };
  const setFilterEvents = () => {
    const eventsDays: EventsType = events.getEvents();
    const filter: { [color: string]: boolean } = Object.values(eventsDays)
      .flat()
      .reduce((item: { [color: string]: boolean }, event: EventType) => {
        item[event.color] = true;
        return item;
      }, {});
    setFilter(filter);
  };

  useEffect(() => {
    setFilterEvents();
  }, []);

  return (
    <WrapperGoogleCalendar>
      <ContainerGoogleCalendar>
        <Sidebar filter={filter} setFilter={setFilter} />
        <Calendar
          date={currentDate}
          onChange={handleClick}
          filter={filter}
          setFilterEvents={setFilterEvents}
        />
      </ContainerGoogleCalendar>
    </WrapperGoogleCalendar>
  );
};

export { GoogleCalendar };
