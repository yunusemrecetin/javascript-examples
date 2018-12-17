let passed = 0;

const timer = setInterval(() => {

  passed++;

  console.log(`${passed} seconds passed.`);

  if (passed === 3) {

    clearInterval(timer);

  }

}, 1000);
