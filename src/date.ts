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
  year: number | string
): number[] => {
  let sanitizedMonth: number,
    monthInOneDimension: number[] = [];
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
  } else {
    sanitizedMonth = month;
  }

  const days = getDaysOfMonth(`${year}-${sanitizedMonth + 1}-01`);
  monthInOneDimension = new Array(days).fill(0).map((day, index) => index + 1);

  return monthInOneDimension;
};

const SUNDAY = 0;
const SATURDAY = 6;
const DAYS_OF_WEEK = 7;

export const getMonthInTwoDimension = (
  month: number,
  year: number | string
): number[][] => {
  let monthInTwoDimension: number[][] = [],
    sanitizedMonth: number,
    tmpMonth: number[];

  if (typeof month !== "number" && month >= 1 && month <= 12) {
    err("month is not a valid number", month);
    return [];
  }
  if (typeof year !== "number" && typeof year !== "string") {
    err("year is not a valid number or string", year);
    return [];
  }
  if (typeof month !== "number") {
    sanitizedMonth = parseInt(month);
  } else {
    sanitizedMonth = month;
  }

  tmpMonth = getMonthOfCalendar(month, year);
  const days = getDaysOfMonth(`${year}-${sanitizedMonth + 1}-01`);

  const firstDate = new Date(`${year}-${sanitizedMonth}-01`);
  const lastDate = new Date(`${year}-${sanitizedMonth}-${days}`);
  if (firstDate.getDay() !== SUNDAY) {
    // pad 0 to start
    tmpMonth.unshift(...new Array(firstDate.getDay()).fill(0));
  }
  if (lastDate.getDay() !== SATURDAY) {
    // pad 0 to end
    tmpMonth.push(...new Array(DAYS_OF_WEEK - lastDate.getDay() - 1).fill(0));
  }
  // split it into length / 7 groups
  let delimeterIndex = 7;
  while (delimeterIndex <= tmpMonth.length) {
    monthInTwoDimension.push(
      tmpMonth.slice(delimeterIndex - DAYS_OF_WEEK, delimeterIndex)
    );
    delimeterIndex += DAYS_OF_WEEK;
  }
  return monthInTwoDimension;
};

export const isToday = (date: string): boolean => {
  if (typeof date !== "string") {
    err("date is not valid string");
    return false;
  }
  const now = new Date();
  const dateObj = new Date(date);
  return (
    now.getFullYear() === dateObj.getFullYear() &&
    now.getMonth() === dateObj.getMonth() &&
    now.getDate() === dateObj.getDate()
  );
};
