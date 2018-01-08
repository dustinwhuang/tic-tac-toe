const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Game {
  constructor() {
    this.board = [
      ['1','2','3'],
      ['4','5','6'],
      ['7','8','9'],
    ];
    this.player = 'X';
  }
}

const prompt = function(game) {
  return new Promise((resolve, reject) => {
    game.board.forEach(row => console.log(row.join(' ')));

    rl.question(`${game.player} move: `, (s) => {
      game.board[Math.floor((s - 1) / 3)][(s - 1) % 3] = game.player;
      game.player = game.player === 'X' ? 'O' : 'X';
      resolve();
    });
  })
};

(async function gameLoop() {
  const game = new Game();
  while(true) {

   await prompt(game);
  }

  rl.close();
})();
