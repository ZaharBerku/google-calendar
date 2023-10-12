import { createContext } from 'react';
import { PublicHoliday } from './publicHoliday';

class RootApi {
    publicHoliday: PublicHoliday;
    constructor() {
        this.publicHoliday = new PublicHoliday();
    }
};

export const api = new RootApi();

export const apiContext = createContext(api)
