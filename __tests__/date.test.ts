import {
  isValidDateString,
  getDaysOfMonth,
  getMonthOfCalendar,
  getMonthInTwoDimension,
  isToday,
} from "@src/date";

import { log } from "@src/debug";

describe("test isValidDateString", () => {
  it("2020-03-01 is valid dateString", () => {
    expect(isValidDateString("2020-03-01")).toBeTruthy();
  });
  it("2020-03-1 is valid dateString", () => {
    expect(isValidDateString("2020-03-1")).toBeTruthy();
  });
  it("2020-03- is not valid dateString", () => {
    expect(isValidDateString("2020-03-")).toBeFalsy();
  });
});

describe("test getDaysOfMonth", () => {
  const errorMock = jest.spyOn(console, "error");
  it("February of leap year has 29 days", () => {
    expect(getDaysOfMonth("2020-03-01")).toBe(29);
    expect(getDaysOfMonth("2021-03-01")).toBe(28);
  });
  it("2020-01 return 31", () => {
    expect(getDaysOfMonth("2020-01")).toBe(0);
    expect(errorMock).toBeCalledTimes(1);
  });
  it("2020-01-01 December 2019 has 31 days", () => {
    expect(getDaysOfMonth("2020-01-01")).toBe(31);
  });
  it("2020-02-01 January 2020 has 31 days", () => {
    expect(getDaysOfMonth("2020-02-01")).toBe(31);
  });
  it("2022-3-1 February 2022 has 28 days", () => {
    expect(getDaysOfMonth("2022-3-1")).toBe(28);
  });
  it("2020-4-1 March 2020 has 31 days", () => {
    expect(getDaysOfMonth("2020-4-1")).toBe(31);
  });
  it("2020-5-1 April 2020 has 30 days", () => {
    expect(getDaysOfMonth("2020-5-1")).toBe(30);
  });
  it("2020-6-1 May 2020 has 31 days", () => {
    expect(getDaysOfMonth("2020-6-1")).toBe(31);
  });
  it("2020-7-1 June has 30 days", () => {
    expect(getDaysOfMonth("2020-7-1")).toBe(30);
  });
  it("2020-8-1 July has 31 days", () => {
    expect(getDaysOfMonth("2020-8-1")).toBe(31);
  });
  it("2020-9-1 August has 31 days", () => {
    expect(getDaysOfMonth("2020-9-1")).toBe(31);
  });
  it("2020-10-1 Sempember has 31 days", () => {
    expect(getDaysOfMonth("2020-10-1")).toBe(30);
  });
  it("2020-11-1 October has 30 days", () => {
    expect(getDaysOfMonth("2020-11-1")).toBe(31);
  });
  it("2020-12-1 November has 30 days", () => {
    expect(getDaysOfMonth("2020-12-1")).toBe(30);
  });
});

describe("test getMonthOfCalendar", () => {
  it("output April of 2022", () => {
    log(getMonthOfCalendar(4, 2022));
  });
});

describe("test getMonthInTwoDimension", () => {
  it("output April of 2022 in two dimension", () => {
    log(getMonthInTwoDimension(4, 2022));
  });

  it("output ", () => {
    log(getMonthInTwoDimension(1, 1999));
  });
});

describe("test isToday", () => {
  it("now is today", () => {
    const now = new Date();
    expect(isToday(now.toISOString())).toBeTruthy();
  });

  it("1999-01-01 is not today ", () => {
    expect(isToday("1999-01-01")).toBeFalsy();
  });
});
