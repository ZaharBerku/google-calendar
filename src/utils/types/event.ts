export type EventsType = {
  [date: string]: EventType[];
};

export type Colors = "purple" | "red" | "green" | "blue";


export type EventType = {
  title: string;
  color: Colors;
  description?: string;
  id?: number;
};

export enum ColorEvent {
  COLOR_HOLIDAY = "blue",
  COLOR_EVENT_RED = "red",
  COLOR_EVENT_GREEN = "green",
  COLOR_EVENT_PURPLE = "purple",
}

