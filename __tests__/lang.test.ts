import { parseSentence } from "@src/lang";

test("valid input", () => {
  expect(parseSentence(["hello", "world"])).toBe("hello world");
});
