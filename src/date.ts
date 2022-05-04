import { err } from "./debug";
export const isValidDateString = (input: string): boolean => {
  const REGEX_DATE = /\d{4}-\d{1,2}-\d{1,2}/g;
  return REGEX_DATE.test(input);
};
/**
 *
 * @param input
 * type the first date of the first day of the next month: like
 * 2020-12-01 get the days of november
 */
export const getDaysOfMonth = (input: string): number => {
  if (!isValidDateString(input)) {
    err("dateString is not valid", input);
    return 0;
  }
  const date = new Date(input);
  date.setDate(date.getDate() - 1);
  return date.getDate();
};

export const getMonthOfCalendar = (
  month: number | string,
  year: number | string,
  twoDimension: boolean = false
): number[] => {
  let sanitizedMonth,
    monthInOneDimension = [],
    monthInTwoDimension = [];
  if (typeof month !== "number" && typeof month !== "string") {
    err("month is not a valid number or string", month);
    return [];
  }
  if (typeof year !== "number" && typeof year !== "string") {
    err("year is not a valid number or string", year);
    return [];
  }
  if (typeof month !== "number") {
    sanitizedMonth = parseInt(month);
  }
  sanitizedMonth = month;

  const days = getDaysOfMonth(`${year}-${sanitizedMonth + 1}-01`);
  monthInOneDimension = new Array(days).fill(0).map((day, index) => index + 1);

  if (!twoDimension) {
    return monthInOneDimension;
  } else {
    let tmp = monthInOneDimension.slice();
    const SUNDAY = 0;
    const SATURDAY = 6;
    const DAYS_OF_WEEK = 7;

    const firstDate = new Date(`${year}-${sanitizedMonth}-01`);
    const lastDate = new Date(`${year}-${sanitizedMonth}-${days}`);
    if (firstDate.getDay() !== SUNDAY) {
      // pad 0 to start
      tmp.unshift(...new Array(firstDate.getDay()).fill(0));
    }
    if (lastDate.getDay() !== SATURDAY) {
      // pad 0 to end
      tmp.push(...new Array(DAYS_OF_WEEK - lastDate.getDay() - 1).fill(0));
    }
    // split it into length / 7 groups
    let delimeterIndex = 7;
    while (delimeterIndex <= tmp.length) {
      monthInTwoDimension.push(
        tmp.slice(delimeterIndex - DAYS_OF_WEEK, delimeterIndex)
      );
      delimeterIndex += DAYS_OF_WEEK;
    }
    return monthInTwoDimension;
  }
};
