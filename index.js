const readline = require('readline');
const Game = require('./game.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = function(game) {
  return new Promise((resolve, reject) => {
    game.display();
    rl.question(`${game.player} move: `, (s) => {
      resolve(s);
    });
  })
};

(async function gameLoop() {
  const game = new Game();
  while(true) {

    const s = await prompt(game);
    if (game.move(s)) {
      game.display();
      console.log(`${game.player === 'X' ? 'O' : 'X'} won!`);
      break;
    } else {
      console.log('Invalid Move!')
    }
  }

  rl.close();
})();
