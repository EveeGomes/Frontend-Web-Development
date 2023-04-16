const App = {
  // Selectors:
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'), // "All" because we want all the elements to have the data-id of square
  },

  init() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
    });

    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the game");
    });

    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("Add a new round");
    });

    // Adding an event listener to all squares in the game board container
    // But since it's a nodelist we need to iterate through them
    App.$.squares.forEach((square) => {
      // each square
      square.addEventListener("click", (event) => {
        // receives an event listener for click and the event returned from that listener will perform/give something that'll be between {}
        console.log(`Square with id ${event.target.id} was clicked`); // ${} between `` means interpolation
      });
    });
  },
};

window.addEventListener("load", App.init);
