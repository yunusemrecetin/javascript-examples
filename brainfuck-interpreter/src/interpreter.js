import chalk from "chalk";

import fs from "fs";

import Instruction from "./instruction.js";


function wrappingAddOnByte(number, amount) {

  const available = 255 - number;

  if (amount > available) {

    return amount - (available + 1);

  }

  return number + amount;

}

function wrappingSubOnByte(number, amount) {

  if (amount > number) {

    return 255 - (amount - number - 1);

  }

  return number - amount;

}


export const MEMORY_SIZE = 30000;

export default class Interpreter {

  constructor(program = "") {

    this.program = [];

    this.load(program);

  }

  execute() {

    const stdin = fs.openSync("/dev/stdin", "rs");

    const read = Buffer.alloc(1);


    const memory = new Array(MEMORY_SIZE).fill(0);

    let currentCell = 0;

    let currentInstruction = 0;


    while (currentInstruction !== this.program.length) {

      switch (this.program[currentInstruction].type) {

        case Instruction.type.MOVE_LEFT: {

          if (this.program[currentInstruction].data > currentCell) {

            fs.closeSync(stdin);

            throw new Error(`${chalk.red("RuntimeError:")} Attempted to access a negative cell`);

          }

          currentCell -= this.program[currentInstruction].data;

          break;

        }

        case Instruction.type.MOVE_RIGHT: {

          if (this.program[currentInstruction].data > MEMORY_SIZE - (currentCell + 1)) {

            fs.closeSync(stdin);

            throw new Error(`${chalk.red("RuntimeError:")} Attempted to access a cell which is above the cell limit`);

          }

          currentCell += this.program[currentInstruction].data;

          break;

        }

        case Instruction.type.INCREMENT: {

          memory[currentCell] = wrappingAddOnByte(memory[currentCell], this.program[currentInstruction].data);

          break;

        }

        case Instruction.type.DECREMENT: {

          memory[currentCell] = wrappingSubOnByte(memory[currentCell], this.program[currentInstruction].data);

          break;

        }

        case Instruction.type.READ: {

          if (fs.readSync(stdin, read, 0, 1, null) === 0) {

            memory[currentCell] = 0;

          } else {

            memory[currentCell] = read[0];

          }

          break;

        }

        case Instruction.type.WRITE: {

          process.stdout.write(Buffer.of(memory[currentCell]));

          break;

        }

        case Instruction.type.START_LOOP: {

          if (memory[currentCell] === 0) {

            currentInstruction = this.program[currentInstruction].data;

          }

          break;

        }

        case Instruction.type.END_LOOP: {

          if (memory[currentCell] !== 0) {

            currentInstruction = this.program[currentInstruction].data;

          }

          break;

        }

      }

      currentInstruction += 1;

    }


    fs.closeSync(stdin);

    return memory;

  }

  load(script) {

    const balancer = [];

    let currentLine = 1;

    let currentColumn = 1;


    const newProgram = [];

    for (const instruction of script) {

      switch (instruction) {

        case "<": {

          if (newProgram.length === 0) {

            newProgram.push(new Instruction(Instruction.type.MOVE_LEFT, 1));

            continue;

          }

          const previousInstruction = newProgram[newProgram.length - 1];

          switch (previousInstruction.type) {

            case Instruction.type.MOVE_LEFT: {

              previousInstruction.data++;

              break;

            }

            case Instruction.type.MOVE_RIGHT: {

              if (--previousInstruction.data === 0) {

                newProgram.pop();

              }

              break;

            }

            default: {

              newProgram.push(new Instruction(Instruction.type.MOVE_LEFT, 1));

              break;

            }

          }

          break;

        }

        case ">": {

          if (newProgram.length === 0) {

            newProgram.push(new Instruction(Instruction.type.MOVE_RIGHT, 1));

            continue;

          }

          const previousInstruction = newProgram[newProgram.length - 1];

          switch (previousInstruction.type) {

            case Instruction.type.MOVE_RIGHT: {

              previousInstruction.data++;

              break;

            }

            case Instruction.type.MOVE_LEFT: {

              if (--previousInstruction.data === 0) {

                newProgram.pop();

              }

              break;

            }

            default: {

              newProgram.push(new Instruction(Instruction.type.MOVE_RIGHT, 1));

              break;

            }

          }

          break;

        }

        case "+": {

          if (newProgram.length === 0) {

            newProgram.push(new Instruction(Instruction.type.INCREMENT, 1));

            continue;

          }

          const previousInstruction = newProgram[newProgram.length - 1];

          switch (previousInstruction.type) {

            case Instruction.type.INCREMENT: {

              if ((previousInstruction.data = wrappingAddOnByte(previousInstruction.data, 1)) === 0) {

                newProgram.pop();

              }

              break;

            }

            case Instruction.type.DECREMENT: {

              if (--previousInstruction.data === 0) {

                newProgram.pop();

              }

              break;

            }

            default: {

              newProgram.push(new Instruction(Instruction.type.INCREMENT, 1));

              break;

            }

          }

          break;

        }

        case "-": {

          if (newProgram.length === 0) {

            newProgram.push(new Instruction(Instruction.type.DECREMENT, 1));

            continue;

          }

          const previousInstruction = newProgram[newProgram.length - 1];

          switch (previousInstruction.type) {

            case Instruction.type.DECREMENT: {

              if ((previousInstruction.data = wrappingAddOnByte(previousInstruction.data, 1)) === 0) {

                newProgram.pop();

              }

              break;

            }

            case Instruction.type.INCREMENT: {

              if (--previousInstruction.data === 0) {

                newProgram.pop();

              }

              break;

            }

            default: {

              newProgram.push(new Instruction(Instruction.type.DECREMENT, 1));

              break;

            }

          }

          break;

        }

        case ",": {

          newProgram.push(new Instruction(Instruction.type.READ));

          break;

        }

        case ".": {

          newProgram.push(new Instruction(Instruction.type.WRITE));

          break;

        }

        case "[": {

          balancer.push([newProgram.length, currentLine, currentColumn]);

          newProgram.push(new Instruction(Instruction.type.START_LOOP, 0));

          break;

        }

        case "]": {

          const matchingStartOfTheLoop = balancer.pop();

          if (!matchingStartOfTheLoop) {

            throw new Error(`${chalk.red("SyntaxError:")} Cannot find the opening bracket of ']' at ${currentLine}:${currentColumn}`);

          }

          newProgram[matchingStartOfTheLoop[0]].data = newProgram.length;

          newProgram.push(new Instruction(Instruction.type.END_LOOP, matchingStartOfTheLoop[0]));

          break;

        }

        case "\n": {

          currentLine++;

          currentColumn = 0;

          break;

        }

        default: {

          break;

        }

      }

      currentColumn += 1;

    }


    if (balancer.length !== 0) {

      const [, line, column] = balancer.pop();

      throw new Error(`${chalk.red("SyntaxError:")} Cannot find the closing bracket of '[' at ${line}:${column}`);

    }


    this.program = newProgram;

  }

  toString() {

    let result = "";

    for (const instruction of this.program) {

      result += instruction.toString();

    }

    return result;

  }

}


export const __private__ = {

  wrappingAddOnByte,

  wrappingSubOnByte,

};
