test("guessNumberGame function exists", () => {
  const script = require("./script");
  expect(typeof script.guessNumberGame).toBe("function");
});
