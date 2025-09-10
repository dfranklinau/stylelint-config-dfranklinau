"use strict";

const config = require("./index");
const fs = require("fs");
const stylelint = require("stylelint");

describe("when linting valid CSS", () => {
  it("does not return an error or flag warnings", async () => {
    const css = fs.readFileSync("./__fixtures__/test.valid.css", "utf-8");

    const result = await stylelint.lint({
      code: css,
      config,
    });

    expect(result.errored).toBe(false);
    expect(result.results[0].warnings).toHaveLength(0);
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

describe("when using the Stylelint configuration", () => {
  const ruleNames = Object.keys(config.rules);

  it("there is at least one rule", () => {
    expect(ruleNames).not.toHaveLength(0)
  });

  for (const ruleName of ruleNames) {
    it(`${ruleName}`, async () => {
      const rule = await stylelint.rules[ruleName];
      expect(rule.meta.deprecated).not.toBe(true);
    });
  }
});
