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
  let sanitizedMonth;
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
  return new Array(days).fill(0).map((day, index) => index + 1);
};
