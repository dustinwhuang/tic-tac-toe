const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Game {
  constructor() {
    this.board = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ];
    this.player = 'X';
  }

  display() {
    this.board.forEach(row => console.log(row.join(' ')));
  }

  move(s) {
    if (/[XO]/.test(this.board[Math.floor((s - 1) / 3)][(s - 1) % 3])) {
      console.log('Invalid Move!');
    } else {
      this.board[Math.floor((s - 1) / 3)][(s - 1) % 3] = this.player;
      this.player = this.player === 'X' ? 'O' : 'X';
    }

    return this.checkWinner();
  }

  checkWinner() {
    const patterns = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    return patterns.some(([a, b, c]) => (
      this.board[a[0]][a[1]] === this.board[b[0]][b[1]]
      && this.board[b[0]][b[1]] === this.board[c[0]][c[1]]
    ));
  }
}

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
    }
  }

  rl.close();
})();
