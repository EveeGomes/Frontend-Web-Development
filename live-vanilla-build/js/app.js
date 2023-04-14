// defining a namespace to avoid future problems regarding variable names
const App = {
  // we'll add selected items as well as initialization methods
  // 1st: use a prefix, such as $ and put all of our selected HTML elements
  // so this $ will be a property of the this namespace
  $: {
    menu: document.querySelector(".menu"),
    menuItems: document.querySelector(".items"), // can't use menu.querySelector bcz now it isn't global anymore, and can't use App.$.menu either because App hasn't been initialized yet
  },

  // the init() method is where we'll add the event listeners to our app
  // ~1h41min more syntax on how to add this init() method
  init() {
    App.$.menu.addEventListener("click", (event) => {
      App.$.menuItems.classList.toggle("hidden");
    });
  },
};

// this won't work just as menu.etc... because it's now App.$.menu
// same for menuItems, which is now App.$.menuItems
// However, like this we're letting things in the global scope; so we gotta add an init() method whitin the App namespace

// menu.addEventListener("click", (event) => {
//   menuItems.classList.toggle("hidden");
// });
