import test from "ava";

import Instruction from "../src/instruction";


test("Instruction.type", (t) => {

  t.deepEqual(

    Instruction.type,

    {

      MOVE_LEFT: 1,

      MOVE_RIGHT: 2,

      INCREMENT: 3,

      DECREMENT: 4,

      READ: 5,

      WRITE: 6,

      START_LOOP: 7,

      END_LOOP: 8,

    }

  );

});


function toString(t, inputs, output) {

  t.is(new Instruction(...inputs).toString(), output);

}

toString.title = (subtitle = "", inputs) => {

  const instructionName = Object.keys(Instruction.type).find(key => Instruction.type[key] === inputs[0]);

  const amount = inputs[1] !== undefined ? `, ${inputs[1]}` : "";

  return `${subtitle} Instruction.toString @ ${instructionName}${amount}`.trim();

};

// @ts-ignore
test(toString, [Instruction.type.MOVE_LEFT, 0], "");

// @ts-ignore
test(toString, [Instruction.type.MOVE_LEFT, 1], "<");

// @ts-ignore
test(toString, [Instruction.type.MOVE_LEFT, 3], "<<<");

// @ts-ignore
test(toString, [Instruction.type.MOVE_RIGHT, 0], "");

// @ts-ignore
test(toString, [Instruction.type.MOVE_RIGHT, 1], ">");

// @ts-ignore
test(toString, [Instruction.type.MOVE_RIGHT, 3], ">>>");

// @ts-ignore
test(toString, [Instruction.type.INCREMENT, 0], "");

// @ts-ignore
test(toString, [Instruction.type.INCREMENT, 1], "+");

// @ts-ignore
test(toString, [Instruction.type.INCREMENT, 3], "+++");

// @ts-ignore
test(toString, [Instruction.type.DECREMENT, 0], "");

// @ts-ignore
test(toString, [Instruction.type.DECREMENT, 1], "-");

// @ts-ignore
test(toString, [Instruction.type.DECREMENT, 3], "---");

// @ts-ignore
test(toString, [Instruction.type.READ], ",");

// @ts-ignore
test(toString, [Instruction.type.WRITE], ".");

// @ts-ignore
test(toString, [Instruction.type.START_LOOP, 0], "[");

// @ts-ignore
test(toString, [Instruction.type.START_LOOP, 1], "[");

// @ts-ignore
test(toString, [Instruction.type.START_LOOP, 3], "[");

// @ts-ignore
test(toString, [Instruction.type.END_LOOP, 0], "]");

// @ts-ignore
test(toString, [Instruction.type.END_LOOP, 1], "]");

// @ts-ignore
test(toString, [Instruction.type.END_LOOP, 3], "]");
