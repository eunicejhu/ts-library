import {
  isEmptyObject,
  isEmptyString,
  isEmptyArray,
  isEqual,
  isFalse,
  strictEqual,
  isUndefined,
  isNull,
} from "@src/dataType";

describe("typeof null, undefined, '', false, {}, []", () => {
  it("typeof null is an object", () => {
    expect(typeof null).toEqual("object");
  });
  it("typeof undefined is undefined", () => {
    expect(typeof undefined).toEqual("undefined");
  });
  it("typeof '' is a string", () => {
    expect(typeof "").toEqual("string");
  });
  it("typeof false is a boolean", () => {
    expect(typeof false).toEqual("boolean");
  });
  it("typeof {} is an object", () => {
    expect(typeof {}).toEqual("object");
  });
  it("typeof [] is an object", () => {
    expect(typeof {}).toEqual("object");
  });
});

describe("test utils", () => {
  describe("boolean", () => {
    describe("a=true, b=true", () => {
      const [a, b] = [true, true];
      it("a === b = true", () => {
        expect(strictEqual(a, b)).toBeTruthy();
      });
      it("isEqual(a,b) = true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });

    describe("a=false, b=false ", () => {
      const [a, b] = [false, false];
      it("a === b = true;", () => {
        expect(strictEqual(a, b)).toBeTruthy();
      });
      it("isEqual(a,b) = true;", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("isFalse()", () => {
      it("isFalse(false) => true", () => {
        expect(isFalse(false)).toBeTruthy();
      });
    });
  });

  describe("string", () => {
    describe(" a=`hello`, b=`hello`", () => {
      const [a, b] = ["hello", "hello"];
      it("a === b => true;", () => {
        expect(strictEqual(a, b)).toBeTruthy();
      });
      it("isEqual(a,b) => true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("string: a=``, b=`` ", () => {
      const [a, b] = ["", ""];
      it("a === b = true;", () => {
        expect(strictEqual(a, b)).toBeTruthy();
      });
      it("isEqual(a,b) = true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });

    describe("isEmptyString()", () => {
      it("isEmptyString('') => true", () => {
        expect(isEmptyString("")).toBeTruthy();
      });
    });
  });

  describe("object", () => {
    describe("a={}, b={}", () => {
      const [a, b] = [{}, {}];
      it("a === b => false;", () => {
        expect(strictEqual(a, b)).toBeFalsy();
      });
      it("isEqual(a,b) => true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("a={a: 1, b: false, c: 'hello', d: [1, 2], e: {a: 3}}, a={a: 1, b: false, c: 'hello', d: [1, 2], e: {a: 3}}", () => {
      const [a, b] = [
        { a: 1, b: false, c: "hello", d: [1, 2], e: { a: 3 } },
        { a: 1, b: false, c: "hello", d: [1, 2], e: { a: 3 } },
      ];
      it("a === b => false;", () => {
        expect(strictEqual(a, b)).toBeFalsy();
      });
      it("isEqual(a,b) => true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("a={a: 1, b: false, c: 'hello', d: [1, 2], e: {a: 3}}, a={a: 1, b: false, c: 'hello', d: [1, 2], e: {a: 4}}", () => {
      const [a, b] = [
        { a: 1, b: false, c: "hello", d: [1, 2], e: { a: 3 } },
        { a: 1, b: false, c: "hello", d: [1, 2], e: { a: 4 } },
      ];
      it("a === b => false;", () => {
        expect(strictEqual(a, b)).toBeFalsy();
      });
      it("isEqual(a,b) => false", () => {
        expect(isEqual(a, b)).toBeFalsy();
      });
    });
    describe("isEmptyObject()", () => {
      it("isEmptyObject({}) => true", () => {
        expect(isEmptyObject({})).toBeTruthy();
      });
    });
  });

  describe("array", () => {
    describe("a=[], b=[]", () => {
      const [a, b] = [[], []];
      it("a === b => false;", () => {
        expect(strictEqual(a, b)).toBeFalsy();
      });
      it("isEqual(a,b) => true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("a=[1, '2'], b=[1, '2']", () => {
      const [a, b] = [
        [1, "2"],
        [1, "2"],
      ];
      it("a === b => false;", () => {
        expect(strictEqual(a, b)).toBeFalsy();
      });
      it("isEqual(a,b) => true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("a=[1, {b:`hello`, c: false}], b=[1, {b:`hello`, c: false}]", () => {
      const [a, b] = [
        [1, { b: `hello`, c: false }],
        [1, { b: `hello`, c: false }],
      ];
      it("a === b => false;", () => {
        expect(strictEqual(a, b)).toBeFalsy();
      });
      it("isEqual(a,b) => true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("isEmptyArray", () => {
      it("isEmptyArray([]) => true", () => {
        expect(isEmptyArray([])).toBeTruthy();
      });
    });
  });

  describe("undefined", () => {
    describe("a=undefined, b=undefined", () => {
      const [a, b] = [undefined, undefined];
      it("a === b => true", () => {
        expect(strictEqual(a, b)).toBeTruthy();
      });
      it("isEqual(a,b) => true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("isUndefined()", () => {
      it("isUndefined(undefined) => true", () => {
        expect(isUndefined(undefined)).toBeTruthy();
      });
      it("isUndefined(null) => false", () => {
        expect(isUndefined(null)).toBeFalsy();
      });
    });
  });

  describe("null", () => {
    describe("a=null, b=null", () => {
      const [a, b] = [null, null];
      it("a === b => true", () => {
        expect(strictEqual(a, b)).toBeTruthy();
      });
      it("isEqual(a,b) => true", () => {
        expect(isEqual(a, b)).toBeTruthy();
      });
    });
    describe("isNull()", () => {
      it("isNull(null) => true", () => {
        expect(isNull(null)).toBeTruthy();
      });
      it("isNull(undefined) => false", () => {
        expect(isNull(undefined)).toBeFalsy();
      });
      it("isNull(false) => false", () => {
        expect(isNull(false)).toBeFalsy();
      });
    });
  });
});
