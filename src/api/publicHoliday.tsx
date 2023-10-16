import { configs } from "@utils/constants";

export class PublicHoliday {
  api: string | undefined;
  constructor() {
    this.api = configs.API;
  }

  async getPublicHolidays({ year }: { year: number }) {
    const userLocale = navigator.language;
    const countryCode = userLocale.split("-")[1] || userLocale.split("_")[1];

    const holidays = await fetch(
      `${this.api}/PublicHolidays/${year}/${countryCode}`
    ).then((res) => res.json());
    return holidays;
  }
}
