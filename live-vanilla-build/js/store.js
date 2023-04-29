export default class Store {
  // add a private variable (property) that'll be an array of moves
  #state = { moves: [] };

  contructor() {}

  #getState() {
    // use the no-mutate-state approach from redux best practice website/documentation
    return this.#state;
  }

  #saveState(newState) {
    this.#state = newState;
  }
}
