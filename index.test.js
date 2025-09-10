"use strict";

const config = require("./index");
const fs = require("fs");
const stylelint = require("stylelint");

describe("when linting valid CSS", () => {
  it("does not return an error, flag warnings or identify deprecated rules", async () => {
    const css = fs.readFileSync("./__fixtures__/test.valid.css", "utf-8");

    const result = await stylelint.lint({
      code: css,
      config,
    });

    expect(result.errored).toBe(false);
    expect(result.results[0].warnings).toHaveLength(0);
    expect(result.results[0].deprecations).toHaveLength(0);
  });
});

describe("when linting invalid CSS", () => {
  it("returns an error with warnings", async () => {
    const css = fs.readFileSync("./__fixtures__/test.invalid.css", "utf-8");
    const result = await stylelint.lint({
      code: css,
      config,
    });

    expect(result.errored).toBe(true);
    expect(result.results[0].warnings).toHaveLength(1);
  });
});
