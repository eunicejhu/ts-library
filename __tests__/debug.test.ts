import { log } from "@src/debug";

describe("test debug", () => {
  it("log(1, 2, 'zuoqin') will log ", () => {
    const spy = jest.spyOn(console, "log");
    log(1);
    expect(spy).toHaveBeenCalledWith(1);
  });
});
