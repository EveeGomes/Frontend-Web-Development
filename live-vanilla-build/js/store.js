const initialValue = {
  moves: [],
};

export default class Store {
  #state = initialValue;

  contructor(players) {
    this.players = players; // this is added since we need the list of players to work on the get game method! So players will be passed to the store class
  }

  // The goal of this method is to take the raw state object (the array of game moves) and calculate useful information from that (like we did in getGameStatus() from App namespace)
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
