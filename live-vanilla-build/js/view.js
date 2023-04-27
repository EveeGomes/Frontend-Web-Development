export default class View {
  $ = {};

  constructor() {
    this.$.menu = document.querySelector('[data-id="menu"]');
    this.$.menuBtn = document.querySelector('[data-id="menu-btn"]');
    this.$.menuItems = document.querySelector('[data-id="menu-items"]');
    this.$.resetBtn = document.querySelector('[data-id="reset-btn"]');
    this.$.newRoundBtn = document.querySelector('[data-id="new-round-btn"]');
    this.$.squares = document.querySelectorAll('[data-id="square"]');
    this.$.modal = document.querySelector('[data-id="modal"]');
    this.$.modalText = document.querySelector('[data-id="modal-text"]');
    this.$.modalBt = document.querySelector('[data-id="modal-btn"]');
    this.$.turn = document.querySelector('[data-id="turn"]');

    // UI-only event listeners:
    this.$.menuBtn.addEventListener("click", (event) => {
      this.toggleMenu();
    });
  }

  /**
   * Register all the event listeners
   */

  bindGameResetEvent(handler) {
    this.$.resetBtn.addEventListener("click", handler);
  }

  bindNewRoundEvent(handler) {
    this.$.newRoundBtn.addEventListener("click", handler);
  }

  bindPlayerMoveEvent(handler) {
    this.$.squares.forEach((square) => {
      square.addEventListener("click", handler);
    });
  }

  /**
   * DOM helper methods
   */
  toggleMenu() {
    this.$.menuItems.classList.toggle("hidden");
    this.$.menuBtn.classList.toggle("border");

    const icon = this.$.menuBtn.querySelector("i");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-left");
  }

  // adding another method (utility method) to decrease the amount of querySelectors in the constuctor (check video: ~3h33min)
  qs(selector) {
    // qs as query selector // selector in the argument will be a string
    const el = document.querySelector(selector);

    // if we can't find an element, we throw an error
    if (!el) throw new Error("Could not find elements");

    return el;

    // this helper method really helps the developer to "guarantee" we're in fact selecting an element
  }
}
