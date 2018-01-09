class Game {
  constructor() {
    this.board = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ];
    this.player = 'X';
    this.moves = 0;
  }

  display() {
    this.board.forEach(row => console.log(row.join(' ')));
  }

  move(s) {
    if (s < 1 || s > 9 || /[XO]/.test(this.board[Math.floor((s - 1) / 3)][(s - 1) % 3])) {
      return 'invalid';
    } else {
      this.board[Math.floor((s - 1) / 3)][(s - 1) % 3] = this.player;
      this.player = this.player === 'X' ? 'O' : 'X';
    }

    this.moves++;

    if (this.moves > 8) {
      return 'draw';
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

module.exports = Game;
