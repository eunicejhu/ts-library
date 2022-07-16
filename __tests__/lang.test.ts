import { parseSentence } from "@src/lang";

test("valid input", () => {
  expect(parseSentence(["hello", "world"])).toBe("hello world");
});

test("valid number input", () => {
  expect(parseSentence(["hello", 2])).toBe("hello 2");
});
