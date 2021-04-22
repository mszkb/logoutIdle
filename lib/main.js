import debounce from "./debounce";

const logoutIdle = (options) => {
  const defaults = {
    inactive: () => {},
    reset: () => {},
    stop: () => {},
    idle: 900000,
    debounceTime: 1000,
  };
  const { inactive, reset, stop, idle, debounceTime } = {
    ...defaults,
    ...options,
  };

  let time;
  let _queue = [];


  // Add one item in the queue after 1 min
  // If there is atleast one item in the queue
  // the quick login process is initiated to extend the duration of jwt whitelist

  const inactiveTrigger = () => {
    inactive();
    clearInterval(queueTime);
    clearTimeout(time);
    document.removeEventListener("mousemove", debounce);
    document.removeEventListener("keypress", instantReset);
    window.removeEventListener("load", debounce)
    //location.href = 'logout.htmlr
  }

  const resetTimer = () => {
    clearTimeout(time);

    // we can apply additional stop condition to force
    if (!stop()) {
      time = setTimeout(inactiveTrigger, idle);
    } else {
      inactiveTrigger();
      return;
    }

    if (_queue.length > 0) {
      // call the callback to reset stuff in the callee
      reset();
      _queue = [];
    }
  }

  const queueTime = () => {
    if (_queue.length === 0) {
      _queue.push("Q");
    }
  }
  const instantReset = () => {
    reset();
    _queue = [];
  }

  window.addEventListener("load", debounce(resetTimer));
  // DOM Events
  document.addEventListener("mousemove", debounce(resetTimer));
  document.addEventListener("keypress", instantReset);
  setInterval(queueTime, debounceTime);

  return true;
};

export default logoutIdle;
