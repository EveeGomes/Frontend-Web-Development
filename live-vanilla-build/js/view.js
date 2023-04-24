export default class View {
  // properties
  $ = {};

  constructor() {
    // this keyword means we're referencing the class' instance itself
    // and in this class we've defined a property named $ (it could be any other name, the $ is just used because is short...)
    this.$.menu = document.querySelector('[data-id="menu"]');
    this.$.menuItems = document.querySelector('[data-id="menu-items"]');
    this.$.resetBtn = document.querySelector('[data-id="reset-btn"]');
    this.$.newRoundBtn = document.querySelector('[data-id="new-round-btn"]');
    this.$.squares = document.querySelectorAll('[data-id="square"]');
    this.$.modal = document.querySelector('[data-id="modal"]');
    this.$.modalText = document.querySelector('[data-id="modal-text"]');
    this.$.modalBt = document.querySelector('[data-id="modal-btn"]');
    this.$.turn = document.querySelector('[data-id="turn"]');
  }

  // bring the event listeners from app.js here, and make them as methods of the view class (~3h:17min)
  // new pattern added: rather than handling the event listeners within the view, we want to do that in the controller
  // that's because the controller is going to read the current state of the application and based on that state it may have to do different things to the view
  // so it's better not to leave these events all to the view itself

  bindGameResetEvent(handler) {
    // handler is a callback function passed as argument to each of these event listeners
    this.$.resetBtn.addEventListener("click", handler);
    // so, instead of doing ...addEventListener('click', event => {...}), we're passing handler
  }

  bindNewRoundEvent(handler) {
    this.$.newRoundBtn.addEventListener("click", handler);
  }

  bindPlayerMoveEvent(handle) {}
}
