class View {
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
