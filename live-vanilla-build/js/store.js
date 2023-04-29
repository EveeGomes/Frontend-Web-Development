const initialValue = {
  moves: [],
};

export default class Store {
  #state = initialValue;

  contructor() {}

  // using a getter function since all that we've done so far are private stuff
  // for example if we use the keyword 'get' followed by a name and the method definition, this will be evaluated at run time:
  /**
   * get game() {
   *
   * }
   *
   * So in app.js after we initialize Store, we can use this getter without the calling () as if it was a function:
   * console.log(store.game);  instead of console.log(store.game()) in case we remove the 'get' keyword
   */

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
