import {configs} from '@utils/constants';

export class PublicHoliday {
    api: string | undefined;
    constructor(){
        this.api = configs.API
    };

    async getPublicHolidays({year, countryCode}: {year: number, countryCode: string}) {
        const holidays = await fetch(`${this.api}/PublicHolidays/${year}/${countryCode}`);
        return holidays
    };
}