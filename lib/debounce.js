// https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
//
// modified with request animation frame
// @source: https://gomakethings.com/debouncing-events-with-requestanimationframe-for-better-performance/
export default function debounce(func) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    // If there's a timer, cancel it
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }
    // Setup the new requestAnimationFrame()
    timeout = window.requestAnimationFrame(function () {
      // Run our scroll functions
      func.apply(context, args);
    });
  };
};
