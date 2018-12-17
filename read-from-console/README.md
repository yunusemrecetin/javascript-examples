<div align="center">
  <h1>read-from-console</h1>
A simple program which demonstrates how to read from standard input.
</div>


## Authors

- [umut-sahin](https://github.com/umut-sahin) - Umut Şahin \<umutsahin@protonmail.com>


## Description

This program first asks for an integer really kindly. Then it waits for the user input. All the I/O operations in Node.js are non-blocking by default. So, in this case, waiting for the user input is actually setting an event listener on the __data__ event of __process.stdin__ then doing absolutely nothing. Once the data is entered, the event dispatcher calls the callback that we passed and the callback tries to convert the entered data to a number. This can be done using the unary __+__ operator. If this operation fails the number becomes __NaN__. Then the callback checks if the entered number is not __NaN__ and in fact an integer. If the check fails, it means that the user gave us bad input. In this case, we respond with the message: __"You did not enter an integer. That was not nice."__. Otherwise, the user is co-operative so we reply with: __"You entered ${enteredInteger}. Thank you for your co-operation."__


## Usage

```
$ npm run -s read-from-console
```


## Arguments and Flags

None


## Example Runs

```
$ npm run -s read-from-console
- Could you enter an integer, please?
+ 42
- You entered 42. Thank you for your co-operation.
```

```
$ npm run -s read-from-console
- Could you enter an integer, please?
+ Hello World!
- You did not enter an integer. That was not nice.
```

```
$ npm run -s read-from-console
- Could you enter an integer, please?
+ 42Hello World!
- You did not enter an integer. That was not nice.
```

```
$ npm run -s read-from-console
- Could you enter an integer, please?
+ 42.42
- You did not enter an integer. That was not nice.
```


## Known Bugs

- Overflow and underflow conditions (See [limitations](#Limitations))


## Limitations

- Every number in JavaScript is actually 64-bit floating point number (IEEE754 Double precision). That's why there are some edge cases, which can't be solved without using an arbitrary precision arithmetics library, where the program behaves unexpectedly (Due to precision errors).


## Notes

- The asynchronous nature of Node.js makes it very difficult to write this kind of example. It's fine in this case but has the potential to become really confusing as the code gets more and more complicated. That's why you should use a library such as [prompts](https://github.com/terkelg/prompts) instead.
