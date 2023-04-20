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
    // we'll simplify things and remove the currentPlayer property to derive this idea from the number of moves (from the moves array)
    moves: [],
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
        // Now, instead of checking whether the squares have child nodes (which actually relies on the DOM), we should check the state of the game!
        // we use a help method which we'll name hasMove, where we define a function that takes a squareId (a number), and we look for this squareId in the array of moves
        const hasMove = (squareId) => {
          const existingMove = App.state.moves.find(
            (move) => move.squareId === squareId
          );
          return existingMove !== undefined; // it's the same as !== null
        };

        if (hasMove(+squareId)) {
          // use + to make sure it's a number!
          return;
        }

        // Find the who's the current player
        const lastMove = App.state.moves.at(-1);
        const getOppositePlayer = (playerId) => (playerId === 1 ? 2 : 1);
        const currentPlayer =
          App.state.moves.length === 0
            ? 1
            : getOppositePlayer(lastMove.playerId);

        // Determine which player icon to add to the square
        const icon = document.createElement("i");
        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }

        // Updating the moves state
        App.state.moves.push({
          squareId: +square.id,
          playerId: currentPlayer,
        });

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
