export default class Instruction {

  static get type() {

    return {

      MOVE_LEFT: 1,

      MOVE_RIGHT: 2,

      INCREMENT: 3,

      DECREMENT: 4,

      READ: 5,

      WRITE: 6,

      START_LOOP: 7,

      END_LOOP: 8,

    };

  }

  constructor(type, data = 0) {

    this.type = type;

    this.data = data;

  }

  toString() {

    let result = "";

    switch (this.type) {

      case Instruction.type.MOVE_LEFT: {

        for (let i = 0; i < this.data; i++) {

          result += "<";

        }

        break;

      }

      case Instruction.type.MOVE_RIGHT: {

        for (let i = 0; i < this.data; i++) {

          result += ">";

        }

        break;

      }

      case Instruction.type.INCREMENT: {

        for (let i = 0; i < this.data; i++) {

          result += "+";

        }

        break;

      }

      case Instruction.type.DECREMENT: {

        for (let i = 0; i < this.data; i++) {

          result += "-";

        }

        break;

      }

      case Instruction.type.READ: {

        result += ",";

        break;

      }

      case Instruction.type.WRITE: {

        result += ".";

        break;

      }

      case Instruction.type.START_LOOP: {

        result += "[";

        break;

      }

      case Instruction.type.END_LOOP: {

        result += "]";

        break;

      }

    }

    return result;

  }

}
