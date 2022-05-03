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
