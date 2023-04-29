export default class Store {
  #state = { moves: [] };

  contructor() {}

  #getState() {
    return this.#state;
  }

  #saveState(stateOrFn) {
    // rather than passing a hardcoding object, we can pass an arg that can be a state/object or function
    // in this case we can pass either a raw object or a callback function (~4h:00)

    const prevState = this.#getState();

    let newState;

    // check what type of argument we're dealing with:
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
