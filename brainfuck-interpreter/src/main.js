import chalk from "chalk";

import commander from "commander";

import fs from "fs";

import Interpreter from "./interpreter";

import path from "path";


let script;


commander

  .name("brainfuck-interpreter")

  .version("1.0.0")

  .description("A simple Brainfuck interpreter written in Node.js")

  .usage("<SCRIPT>")

  .arguments("<SCRIPT>")

  .action((input) => {

    try {

      script = fs.readFileSync(

        path.resolve(input),

        {

          encoding: "utf8",

        }

      );

    } catch (err) {

      console.log(`${chalk.red("IOError:")} ${err.message}`);

      process.exit(1);

    }

  })

  .parse(process.argv);


if (!script) {

  console.log(`${chalk.red("UsageError:")} The following required argument was not provided: ${chalk.red("<SCRIPT>")}`);

  process.exit(1);

}


try {

  const interpreter = new Interpreter(script);

  interpreter.execute();

} catch (err) {

  console.log(err.message);

  process.exit(1);

}
