<div align="center">
  <h1>timers</h1>
A simple program which demonstrates how to use timers to execute a function indefinitely but with a delay.
</div>


## Authors

- [umut-sahin](https://github.com/umut-sahin) - Umut Şahin \<umutsahin@protonmail.com>


## Description

This program uses  __setInterval__ and __clearInterval__ functions, which were defined in the global execution context, in order to achieve its purpose of executing the same function over and over again with a delay.

The function our timer executes is a function which increments the value of a variable called __passed__ (which is initially __0__) by __1__ and print the value of __passed__ with additional info to the standard output.
Then this function checks if the value of __passed__ is equal to __3__. If so, it deletes the timer with a __clearInterval__ call which causes the program to finish.
Moreover, our timer is set to execute with the delay of __1000__ ms which is 1 second. So variable __passed__ is essentially the number of seconds passed since the program started.


## Usage

```
$ npm run -s timers
```


## Arguments and Flags

None


## Example Run

```
$ npm run -s timers
1 seconds passed.
2 seconds passed.
3 seconds passed.
```


## Known Bugs

None


## Limitations

- Because the way the Node.js works, a timer is not guaranteed to work exactly after the specified amount of time has passed. What actually happens is after the specified amount of time has passed, Node.js will put a new event to the event queue. That event will be processed in the next tick of the event loop. So if the event loop is blocked or taking a long time for some reason, the function which the timer is supposed to execute after the specified amount of time will be executed with an additional delay. This can easily be proven by adding an additional statement which blocks the event loop such as ``` while (true) {} ```  at the end of the main.js file.


## Notes

None
