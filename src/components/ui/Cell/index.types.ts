import { PropsWithChildren, DragEvent } from "react";
import { EventType } from "@utils/types";

export type ListEventsProps = {
  listEvents?: EventType[];
  hadleEditEvent?: (selectEvent: EventType, date: string) => void;
  formattedDate?: string;
  onDragStart?: (event: DragEvent<HTMLLIElement>, date: EventType) => void;
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
  onDragStart?: (event: DragEvent<HTMLLIElement>, date: EventType) => void;
  onDragEnd?: (event: DragEvent<HTMLDivElement>) => void;
  onDragOver?: (event: DragEvent<HTMLDivElement>) => void;
  filter?: { [color: string]: boolean } | null;
}>;
