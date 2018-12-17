console.log("- Could you enter an integer, please?");
process.stdout.write("+ ");

process.stdin.on("data", (data) => {

  const enteredInteger = +data;

  if (Number.isNaN(enteredInteger) || Math.floor(enteredInteger) !== enteredInteger) {

    process.stderr.write("- You did not enter an integer. That was not nice.\n");

    process.exit(1);

  }

  console.log(`- You entered ${enteredInteger}. Thank you for your co-operation.`);

  process.exit(0);

});
