import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the form handler", () => {
  test("should have a defined function", () => {
    expect(handleSubmit).toBeDefined();
  });
});
