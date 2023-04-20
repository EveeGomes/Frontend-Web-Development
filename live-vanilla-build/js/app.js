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

  // this function will take an array of moves as argument
  getGameStatus(moves) {
    // the moves array is basically the entire game
    const p1Moves = moves.filter((move) => move.player.id === 1);
    const p2Moves = moves.filter((move) => move.playerId === 2);

    // check 2h:36min
    const winningPatterns = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ];

    // loop through the winningPatterns and check if the player moves match all them so it'll be the winner
    let winner = null;

    winningPatterns.forEach((pattern) => {
      // pattern variable represent one of the arrays inside winningPatterns (like [1, 2, 3])
      // so we break it down into a function that'll check for the matching
      const p1Wins = pattern.every((v) => p1Moves.includes(v)); // v is for value
      const p2Wins = pattern.every((v) => p2Moves.includes(v));

      if (p1Wins) winner = 1;
      if (p2Wins) winner = 2;
    });

    return {
      // winner != null means some of the players had won the game before all 9 squares have been used
      status: moves.length === 9 || winner != null ? "complete" : "in-progress",
      winner,
    };
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
        // Check if there's already a play, if so, return early:
        // So 1st, check the state of the game!
        const hasMove = (squareId) => {
          const existingMove = App.state.moves.find(
            (move) => move.squareId === squareId
          );
          return existingMove !== undefined;
        };
        // Then check if there's a move in that square already!
        if (hasMove(+square.id)) {
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

        // Updating the moves state (updating the array of moves!)
        App.state.moves.push({
          squareId: +square.id,
          playerId: currentPlayer,
        });

        square.replaceChildren(icon);

        // Check if there's a winner or tie game
        // Now once we have and use the array of moves to track the state of the game, we also check if there's a winner or a tie or even if still in progress
        // we'll use a utility function (for now we'll put inside the App definition)
      });
    });
  },
};

window.addEventListener("load", App.init);
