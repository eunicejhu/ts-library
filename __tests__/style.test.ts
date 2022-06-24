import { styleStringToCSSProperties } from "@src/style";

describe("test style", () => {
  it("stroke-width:4;stroke-miterlimit:10 should return {}", () => {
    expect(
      styleStringToCSSProperties("stroke-width:4;stroke-miterlimit:10")
    ).toEqual({ strokeWidth: "4", strokeMiterlimit: "10" });
  });
});
