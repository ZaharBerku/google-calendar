import { addDays, format, startOfWeek } from "date-fns";

const getDaysOfWeek = (formatDayName: string = "EE") => {
  const firstDOW = startOfWeek(new Date());
  const shortWeekDaysArray = Array.from(Array(7)).map((e, i) =>
    format(addDays(firstDOW, i), formatDayName)
  );
  return shortWeekDaysArray;
};

export { getDaysOfWeek };
