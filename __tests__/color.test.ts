import { colors, log, toAlphaColor } from "@src/index";
it("test colors", () => {
  const colorsArray = colors(5);
  log(colorsArray);
});
it("test toAlphaColor", () => {
  const color = "rgb(1, 233, 33)";
  const alpha = 0;
  expect(toAlphaColor(color, alpha)).toEqual("rgba(1,233,33,0)");
});
