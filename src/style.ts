import * as CSS from "csstype";
export const styleStringToCSSProperties = (style: string): CSS.Properties => {
  let res = {};
  const CSS_REGEX = /-(\w)/g;
  const keyValuePairs = style
    .replace(CSS_REGEX, (matches, p1: string) => {
      return p1.toUpperCase();
    })
    .split(";");
  keyValuePairs.forEach((keyValue) => {
    const [key, value] = keyValue.split(":");
    res[key] = value;
  });
  return res;
};
