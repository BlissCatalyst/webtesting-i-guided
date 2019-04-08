describe("honest function", () => {
  test("an honest function should always tell the truth", () => {
    expect(honest()).toBeTruthy();
  });
});

function honest() {
  return true;
}
