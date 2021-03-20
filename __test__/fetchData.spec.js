import { fetchData } from "../src/client/js/fetchData";

describe("Testing the fetch data", () => {
  test("should have a defined function", () => {
    expect(fetchData).toBeDefined();
  });
});
