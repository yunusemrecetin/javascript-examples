<div align="center">
  <h1>command-line-arguments</h1>
A simple program which demonstrates how to iterate over the arguments which are passed during the program invocation.
</div>


## Authors

- [umut-sahin](https://github.com/umut-sahin) - Umut Şahin \<umutsahin@protonmail.com>


## Description

This program iterates over __process.argv__, which is an array containing passed command line arguments during the invocation of __node__ command. The program uses __entries__ method on __process.argv__ in order to also get the indexes. Then for every argument in the list, it prints the index of the argument as well as the argument itself. After every single argument is printed, the program finishes.


## Usage

```
$ npm run -s command-line-arguments
```

```
$ npm run -s command-line-arguments -- [...]
```


## Arguments and Flags

- Argument: __...__,
  - Type: __Any__
  - Optional: __true__
  - Multiple: __true__


## Example Runs

```
$ npm run -s command-line-arguments
0: /usr/bin/node
1: <path-to-repo>/command-line-arguments/src/main.js
2: word
3: word with spaces
4: -a
5: --arg
```

```
$ npm run -s command-line-arguments -- example "example with spaces" -e --example
0: /usr/bin/node
1: <path-to-repo>/command-line-arguments/src/main.js
2: word
3: word with spaces
4: -a
5: --arg
6: example
7: example with spaces
8: -e
9: --example
```


## Known Bugs

None


## Limitations

None


## Notes

- In the npm script, some command line arguments are already specified for testing purposes. That's why on the empty example run there are a lot of arguments even if we didn't pass anything explicitly.
