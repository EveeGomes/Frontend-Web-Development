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
        console.log(`Square with id ${event.target.id} was clicked`);
        console.log(`Current player is ${App.state.currentPlayer}`);

        // In order to prevent the state to update while the user clicks on the same square where there's already an icon, we need to add a check.
        // instead of checking if the event.target has child nodes, we'll check if the square has it.
        // This prevents the behavior of adding a duplicate in case the user clicks on the icon instead of the square
        if (square.hasChildNodes()) {
          return;
        }

        const currentPlayer = App.state.currentPlayer;

        const icon = document.createElement("i");
        if (currentPlayer === 1) {
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }

        App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;

        // Instead of replacing the event target's children, we have to replace the square's.
        square.replaceChildren(icon);
      });
    });
  },
};

window.addEventListener("load", App.init);
