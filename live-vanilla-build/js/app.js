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

        // the icon is created regardless of the style since it'll be added depending on the currentPlayer
        const icon = document.createElement("i");

        const currentPlayer = App.state.currentPlayer;
        if (currentPlayer === 1) {
          // add a class list according to the currentPlayer so it'll receive the appropriate style!
          icon.classList.add("fa-solid", "fa-x", "yellow");
        } else {
          icon.classList.add("fa-solid", "fa-o", "turquoise");
        }

        // update the state everytime a move happens:
        // set the state of currentPlayer to whoever is not playing this move; so if the current player is 1, we'll set it to 2, otherwise we'll set to 1
        App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1;

        // And then this will replace the content on the target square with the icon having a certain style
        event.target.replaceChildren(icon);
      });
    });
  },
};

window.addEventListener("load", App.init);
