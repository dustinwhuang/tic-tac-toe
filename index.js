const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = function() {
  return new Promise((resolve, reject) => {
    rl.question("X move: ", (a) => {
      console.log(a);

      resolve();
    });
  })
};

(async function gameLoop() {
  while(true) {

   await prompt();
  }

  rl.close();
})();
