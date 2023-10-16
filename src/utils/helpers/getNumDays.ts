import {
  differenceInDays,
  endOfMonth,
  startOfMonth,
  getDate,
  getYear,
  getMonth,
} from "date-fns";

const getNumDays = (date: Date) => {
  const NUMBER_OF_DAYS_WEEK = 6;
  const startDate = startOfMonth(date);
  const endDate = endOfMonth(date);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay();
  const suffixDays = NUMBER_OF_DAYS_WEEK - endDate.getDay();
  const dayInMonth = getDate(date);
  const currentMonth = getMonth(date);
  const currentYear = getYear(date);
  return {
    prefixDays,
    numDays,
    suffixDays,
    dayInMonth,
    currentYear,
    currentMonth,
  };
};

export { getNumDays };
