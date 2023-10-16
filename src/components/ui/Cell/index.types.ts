import { PropsWithChildren } from "react";
import { EventType } from "@utils/types";

export type ListEventsProps = {
  listEvents?: EventType[];
  hadleEditEvent?: (selectEvent: EventType, date: string) => void;
  formattedDate?: string;
  onDragStart?: any;
  filter?: { [color: string]: boolean } | null;
};

export type CellProps = PropsWithChildren<{
  backgroundcolor?: string;
  day?: number;
  isSelectDay?: boolean;
  listEvents?: EventType[];
  formattedDate?: string;
  hadleEditEvent?: (selectEvent: EventType, date: string) => void;
  draggable?: boolean;
  onDragStart?: any;
  onDragEnd?: any;
  onDragOver?: any;
  filter?: { [color: string]: boolean } | null;
}>;
