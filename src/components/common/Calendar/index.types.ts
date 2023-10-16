import { EventType, EventsType } from "@utils/types";

export type CalendarProps = {
  date: Date;
  onChange?: (value: Date) => void;
  hadleEditEvent?: (selectEvent: EventType, date: string) => void;
  filter?: { [color: string]: boolean } | null;
  setFilterEvents?: () => void;
};

export type CalendarHeaderProps = CalendarProps;

export type CalendarBodyProps = CalendarProps;

export type DaysPorps = CalendarProps & {
  getEvents: () => void;
  currentEvents: EventsType | null;
};

export type PaginationCalendarProps = CalendarProps;

export type Holiday = {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string | null;
  launchYear: string | null;
  types: string[];
};
