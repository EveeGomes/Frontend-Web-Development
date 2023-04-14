const App = {
  $: {
    menu: document.querySelector('[data-id="menu"]'), // instead of selecting the class we'll now use the data-id attribute, that's why we use brackets []
    menuItems: document.querySelector('[data-id="menu-items"]'),
    resetBtn: document.querySelector('[data-id="reset-btn"]'),
    newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
  },

  init() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
    });

    // add an event listener to the reset button
    // we'll wait for a click and add a callback function that receives the event
    App.$.resetBtn.addEventListener("click", (event) => {
      console.log("Reset the game");
    });

    App.$.newRoundBtn.addEventListener("click", (event) => {
      console.log("Add a new round");
    });
  },
};

window.addEventListener("load", App.init);
