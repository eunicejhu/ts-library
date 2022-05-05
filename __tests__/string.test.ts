import { merge } from "@src/string";
describe("test string", () => {
  it("merge('hello', 'hola') output 'hello hola'", () => {
    expect(merge("hello", "hola")).toBe("hello hola");
  });
  it("merge('a', 'b', 'c') output 'a b c'", () => {
    expect(merge("a", "b", "c")).toBe("a b c");
  });
});
