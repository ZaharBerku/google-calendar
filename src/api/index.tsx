import { createContext } from "react";
import { PublicHoliday } from "./publicHoliday";
import { Events } from "./events";

class RootApi {
  publicHoliday: PublicHoliday;
  events: Events;
  constructor() {
    this.publicHoliday = new PublicHoliday();
    this.events = new Events();
  }
}

export const api = new RootApi();

export const apiContext = createContext(api);
