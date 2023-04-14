const App = {
  $: {
    menu: document.querySelector(".menu"),
    menuItems: document.querySelector(".items"),
  },

  init() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
    });
  },
};

// To initialize init() we gotta use the window and the object and use event listener as the load with the callback function as the init method:
window.addEventListener("load", () => App.init());
