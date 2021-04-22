import idle from "../lib/main";

test("test jest", () => {
  expect(1).toBe(1);
})

test("check if it gets everything setup", () => {
  const inactiveFn = jest.fn();
  const restFn = jest.fn();
  const stopFn = jest.fn();

  expect(idle({
    inactive: inactiveFn,
    reset: restFn,
    stop: stopFn,
    idle: 60000, // 1 second
  })).toBe(true);
})

test("keypress event", () => {
  document.addEventListener('keypress', function(e) {
    console.log('test');
  });

  var evt = document.createEvent("HTMLEvents");
  evt.initEvent("keypress", false, true);

  const inactiveFn = jest.fn();
  const restFn = jest.fn(() => {console.log("oida")});
  const stopFn = jest.fn();

  expect(idle({
    inactive: inactiveFn,
    reset: restFn,
    stop: stopFn,
    idle: 1000, // 1 second
  })).toBe(true);

  expect(restFn).not.toHaveBeenCalled();
  document.dispatchEvent(evt);
  expect(restFn).toHaveBeenCalled();
})
