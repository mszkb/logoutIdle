# Logout on Idle 

<p align="center">
  <img src="https://mszkb.github.io/logoutIdle/public/logo.png">
</p>

Frontend only. Backend solution tba

Compact but powerful function to invoke a callback function when nothing happens on the viewport.
It is general purpose and works with any frontend framework.

[FUN Demo here](https://mszkb.github.io/logoutIdle/)

Normal Demo: https://mszkb.github.io/logoutIdle/normal.html


## Use cases

- logging out after 15 minutes
- "You still there?" after 10 minutes
- show timer to confirm that the user is still there

## How it works?

The function does not log you out in the first place. The logging out has to be done by you.

In the background it saves the current timestamp as the deadline. 
This timestamp will be compared to the next timestamp which occours if the user performs any action for example 'mousemove', 'click'.
After that action is performed and the timestamp is lesser than the deadline timestamp, a new deadline will be set.
If the action is performed after the deadline, a callback will be invoked and the function will be set to inactive and the actionlisteners such as 'mousemove' and 'click' are removed.

## Usage

You can define several callbacks which can be used in your application.
Here is a exhausting example to use all callbacks and example where to use them

```js
import logoutIdle from "logoutIdle";

// 15 min allowed for idle
const minutesToIdle = 15 * 1000 * 60;
// grace period to actually fire your callback
const debounceTime = 10000;

function myCallback() {
  console.log("Yiis, logging out the mooscles");
}

logoutIdle({
      inactive: myCallback,
      reset: () => {
 	    console.log("User is still here");
        console.log("Ignore this or maybe update some stuff on your frontend?")
      },
      stop: () => {
        console.log("return true to stop the timers");
        return true;
      },
      idle: minutesToIdle,
      debounceTime: 10000,
 });
```

