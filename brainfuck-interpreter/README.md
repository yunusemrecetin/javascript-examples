<div align="center">
  <h1>brainfuck-interpreter</h1>
A simple <a href="https://esolangs.org/wiki/brainfuck">Brainfuck</a> interpreter written in Node.js
</div>


## Authors

- [umut-sahin](https://github.com/umut-sahin) - Umut Şahin \<umutsahin@protonmail.com>


## Description

This program is made out of three parts. First part is to parse the command line options and to read the passed script file. After that, it's time to parse the script file. This is achieved with the member method __load__ of the __Interpreter__ class. We didn't call __load__ by hand though. The __constructor__ of the __Interpreter__ class handled that for us. If the syntax of the script file is correct, no exceptions are raised. If everything went ok so far, we are now ready to interpret the parsed script. We tell the interpreter to start interpreting the script by calling the __execute__ method. This method will go through the instructions one by one execute the required accordingly. If there are no memory violations, no exceptions are raised and we are done.


## Usage

```
$ npm run -s brainfuck-interpreter -- <SCRIPT>
```


## Arguments and Flags

- Argument: __SCRIPT__,
  - Type: __Path__
  - Optional: __false__
  - Multiple: __false__


## Example Runs

```
$ npm run -s brainfuck-interpreter
UsageError: The following required argument was not provided: <SCRIPT>
```

```
$ npm run -s brainfuck-interpreter -- --help
Usage: brainfuck-interpreter <SCRIPT>

A simple Brainfuck interpreter written in Node.js

Options:
  -V, --version  output the version number
  -h, --help     output usage information
```

```
$ npm run -s brainfuck-interpreter -- -V
1.0.0
```

```
$ npm run -s brainfuck-interpreter -- brainfuck-interpreter/assets/hello-world.bf
Hello World!
```

```
$ npm run -s brainfuck-interpreter -- brainfuck-interpreter/assets/cat.bf
Hello World!
Hello World!
Goodbye World!
Goodbye World!
^D
```

```
$ npm run -s brainfuck-interpreter -- brainfuck-interpreter/assets/rot13.bf
Hello World!
Uryyb Jbeyq!
^D
```

## Known Bugs

None


## Limitations

None


## Notes

- Due to ```fs.openSync("/dev/stdin", "rs");```, some operating systems are not supported. This was the easiest and frankly the best way to implement such an example.
