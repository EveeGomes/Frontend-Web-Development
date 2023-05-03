const initialValue = {
  moves: [],
};

export default class Store {
  #state = initialValue;

  contructor(players) {
    this.players = players;
  }

  get game() {
    // get the current player (4h:15min)
    const state = this.#getState();

    // using modulus operator to derive the current player:
    const currentPlayer = this.players[state.moves.length % 2];

    // like this we return currentPlayer as part of an object
    return {
      currentPlayer,
    };
  }

  // public method to updtate the state
  playerMove(squareId) {
    const state = this.#getState();

    const stateClone = structuredClone(state);

    stateClone.moves.push({
      squareId,
      player: this.game.currentPlayer,
    });

    this.#saveState(stateClone); // this will be refactored later
  }

  #getState() {
    return this.#state;
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
