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
}

// because of strict mode, View isn't in global scope because we haven't attached it to the window (so for ex. if we try to type View in the console, it'll say it's not defined)
// an optional thing to do (for it to become defined), is by explicitly attaching it to the window

window.View = View;
