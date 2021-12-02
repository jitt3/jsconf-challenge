import { getOrderedNumbersByWeight } from "../src/getOrderedNumbersByWeight";

describe("getOrderedNumbersByWeight", () => {
  test("Example provided", () => {
    const input: string = "56 65 74 100 99 68 86 180 90";
    const output: string = "100 180 90 56 65 74 68 86 99";
    expect(getOrderedNumbersByWeight(input)).toBe(output);
  });

  test("Natural numbers", () => {
    const input: string = "1 2 3 4 5";
    const output: string = "1 2 3 4 5";
    expect(getOrderedNumbersByWeight(input)).toBe(output);
  });

  test("No input", () => {
    const input: string = "";
    const output: string = "";
    expect(getOrderedNumbersByWeight(input)).toBe(output);
  });

  test("Same weight", () => {
    const input: string = "180 9 180 72 72";
    const output: string = "180 180 72 72 9";
    const resp = getOrderedNumbersByWeight(input);
    expect(resp).toBe(output);
  });
});
