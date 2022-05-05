import { err } from "./debug";
export const merge = (...args: string[]): string => {
  if (args.every((arg) => typeof arg !== "string")) {
    err("exist non-string argument!");
    return "";
  }
  return args.join(" ");
};
