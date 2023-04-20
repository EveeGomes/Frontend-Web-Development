const App = {
  // Selectors:
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  // Create a state property; this won't be persistant across browser refreshers because it's just a variable so it'll be re-initialized and reassigned everytime we refresh
  state: {
    // 1st state we want; the player 1 will always start the game; and that state it'll also allow us to decide in the event listener for the icon, which one to draw (x or o)
    // everytime a move is made, we'll change the state (all in the event listener for the game board elements)
    currentPlayer: 1,
  },

  init() {
    App.registerEventListener();
  },

  registerEventListener() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
    });

    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the game");
    });

    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("Add a new round");
    });

    App.$.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        // Check if there's already a play, if so, return early
        if (square.hasChildNodes()) {
          return;
        }

        // Determine which player icon to add to the square
        const currentPlayer = App.state.currentPlayer;

        const icon = document.createElement("i");
        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }

        App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;

        square.replaceChildren(icon);

        // Check if there's a winner or tie game
      });
    });
  },
};

window.addEventListener("load", App.init);
