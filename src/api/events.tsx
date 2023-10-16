import { EventType } from "@utils/types";

export class Events {
  localStorageName: string;
  constructor() {
    this.localStorageName = "event";
  }

  setEvent(event: EventType, date: string) {
    const events = this.getEvents();
    events[date] =
      events[date] && events[date]?.length ? [...events[date], event] : [event];
    this.setLocalStorageEvents(events);
  }

  deleteEvent(date: string, id: number) {
    const events = this.getEvents();
    const eventsDates = events[date];
    if (eventsDates.length > 1) {
      const clearEvents = eventsDates.filter((event: EventType) => event.id !== id);
      events[date] = clearEvents;
    } else if (eventsDates) {
      delete events[date];
    }
    this.setLocalStorageEvents(events);
  }

  editEvent(date: string, id: number, event: EventType) {
    const events = this.getEvents();
    const eventsDates = events[date];

    if (eventsDates) {
      const indexEvent: number = eventsDates.findIndex(
        (event: EventType) => event.id === id
      );
      eventsDates[indexEvent] = event;
    }
    this.setLocalStorageEvents(events);
  }

  getEvents() {
    const events = localStorage.getItem(this.localStorageName);
    return events ? JSON.parse(events) : {};
  }

  setLocalStorageEvents(events: EventType) {
    localStorage.setItem(this.localStorageName, JSON.stringify(events));
  }
}
