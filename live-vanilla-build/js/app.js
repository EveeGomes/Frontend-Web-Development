const App = {
  // Selectors:
  $: {
    menu: document.querySelector('[data-id="menu"]'),
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
    squares: document.querySelectorAll('[data-id="square"]'),
  },

  state: {
    currentPlayer: 1,
    // track an array of game moves to finally start working on the winning possibilities
    // these moves will be from the player that has played
    moves: [], // leaving empty since it's the default
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

        // As well as updating the state, we also want to update the move. This has to be before we update the current player:
        App.state.moves.push({
          squareId: +square.id, // we'll reference the square; the + sign will work as a coersion to make it a number type
          playerId: currentPlayer, //
        });
        // the new move is going to be an object

        // refactoring App.state.currentPlayer to currentPlayer since we already have this declared as const before
        App.state.currentPlayer = currentPlayer === 1 ? 2 : 1;

        // only to track purpose while implementing the new updates
        console.log(App.state);

        square.replaceChildren(icon);

        // Check if there's a winner or tie game
      });
    });
  },
};

window.addEventListener("load", App.init);
