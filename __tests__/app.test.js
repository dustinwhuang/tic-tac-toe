const Game = require('../game.js');

describe('game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  test('X should win', (done) => {
    game.move(1);
    game.move(4);
    game.move(2);
    game.move(5);

    expect(game.move(3)).toBe(true);

    done();
  });

  test('O should win', (done) => {
    game.move(4);
    game.move(1);
    game.move(2);
    game.move(5);
    game.move(6);

    expect(game.move(9)).toBe(true);

    done();
  });

  test('should not allow moves in the same space', (done) => {
    game.move(5);

    expect(game.move(5)).toBe(false);

    done();
  });
});
