import { FC, MouseEvent } from "react";
import { ColorEvent } from "@utils/types";
import { CellProps, ListEventsProps } from "./index.types";
import { CellElement, List, Item } from "./index.styled";

const ListEvents: FC<ListEventsProps> = ({
  listEvents,
  hadleEditEvent,
  formattedDate,
  onDragStart,
  filter,
}) => {
  if (!listEvents?.length) {
    return null;
  }

  const handleClick = (event: MouseEvent<HTMLUListElement>) => {
    if (event.target instanceof HTMLLIElement) {
      const element = event.target.closest("[data-event]");
      const { event: eventEdit } = (element as HTMLLIElement)?.dataset || {};
      if (eventEdit && hadleEditEvent && formattedDate) {
        const parseEvent = JSON.parse(eventEdit);
        if (parseEvent?.color !== ColorEvent.COLOR_HOLIDAY) {
          hadleEditEvent(parseEvent, formattedDate);
        }
      }
    }
  };

  return (
    <List onClick={handleClick}>
      {listEvents?.map((event) => {
        if (
          filter &&
          filter[event.color] !== undefined &&
          !filter[event.color]
        ) {
          return null;
        }
        return (
          <Item
            onDragStart={(e) => onDragStart && onDragStart(e, event)}
            data-event={JSON.stringify(event)}
            draggable={event.color !== ColorEvent.COLOR_HOLIDAY}
            key={event.id}
            $isHoliday={event.color === ColorEvent.COLOR_HOLIDAY}
            $color={event.color}
          >
            {event.title}
          </Item>
        );
      })}
    </List>
  );
};

const Cell: FC<CellProps> = ({
  children,
  backgroundcolor,
  day,
  isSelectDay,
  listEvents,
  hadleEditEvent,
  formattedDate,
  onDragStart,
  onDragEnd,
  onDragOver,
  filter,
}) => {
  return (
    <CellElement
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrag={(e) => e.preventDefault()}
      data-day={day}
      $backgroundcolor={backgroundcolor}
      $isSelectDay={isSelectDay}
    >
      {children}
      <ListEvents
        filter={filter}
        onDragStart={onDragStart}
        formattedDate={formattedDate}
        listEvents={listEvents}
        hadleEditEvent={hadleEditEvent}
      />
    </CellElement>
  );
};

export { Cell };
