const initialValue = {
  currentGameMoves: [],
  history: {
    currentRoundGames: [],
    allGames: [],
  },
};

export default class Store {
  #state = initialValue;

  constructor(players) {
    this.players = players;
  }

  get game() {
    const state = this.#getState();
    const currentPlayer = this.players[state.currentGameMoves.length % 2];

    const winningPatterns = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];

    let winner = null;

    for (const player of this.players) {
      const selectedSquareIds = state.currentGameMoves
        .filter((move) => move.player.id === player.id)
        .map((move) => move.squareId);

      for (const pattern of winningPatterns) {
        if (pattern.every((v) => selectedSquareIds.includes(v))) {
          winner = player;
        }
      }
    }

    return {
      moves: state.moves,
      currentPlayer,
      status: {
        isComplete: winner != null || state.moves.length === 9,
        winner,
      },
    };
  }

  // public method to updatate the state
  playerMove(squareId) {
    // refactoring
    const stateClone = structuredClone(this.#getState());

    stateClone.moves.push({
      squareId,
      player: this.game.currentPlayer,
    });

    this.#saveState(stateClone);
  }

  #getState() {
    return this.#state;
  }

  // updating:
  reset() {
    // make a state clone too instead of working with it directly:
    const stateClone = structuredClone(this.#getState());

    // destructor? 4h:50min
    const { status, moves } = this.game;

    if (status.isComplete) {
      // using the const above we can now use this instead of if(this.game.status.isComplete)
      // push the game we're reseting to the history object! (this is a complete game!)
      stateClone.history.currentRoundGames.push({
        moves,
        status,
      });
    }

    stateClone.currentGameMoves = []; // reset the moves

    this.#saveState(stateClone); // instead of initialValue
  }

  #saveState(stateOrFn) {
    const prevState = this.#getState();

    let newState;

    switch (typeof stateOrFn) {
      case "function":
        newState = stateOrFn(prevState);
        break;
      case "object":
        newState = stateOrFn;
        break;
      default:
        throw new Error("Invalid argument passed to saveState");
    }

    this.#state = newState;
  }
}
