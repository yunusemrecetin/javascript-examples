<div align="center">
  <h1>tcp-echo-server</h1>
A simple program which demonstrates how to create the most basic TCP server which echoes back what the client writes after successfully connecting.
</div>


## Authors

- [umut-sahin](https://github.com/umut-sahin) - Umut Şahin \<umutsahin@protonmail.com>


## Description

This program uses a built-in __net__ module in order to create a TCP server which listens to port __8000__. Then for each connected client, it responds with whatever the client writes. Here the __socket__ variable represents the client and is a __Duplex Stream__ which means it both has a __write__ method and __data__ event. So the code can also be written as ``` socket.on("data", (read) => socket.write(read));```. However, this is a bad practice since __Readable Streams__ can be piped to __Writable Streams__ and __Duplex Streams__ are both __Readable__  and __Writable__. So the idiomatic way of achieving this is by writing ```socket.pipe(socket);``` (Which is how our example is written).


## Usage

```
$ npm run -s tcp-echo-server
```


## Arguments and Flags

None


## Example Run

```
$ npm run -s tcp-echo-server

```
Then in another terminal
```
$ nc 127.0.0.1 8000
Hello World!
Hello World!
Goodbye World!
Goodbye World!
^C
```


## Known Bugs

None


## Limitations

None


## Notes

None
