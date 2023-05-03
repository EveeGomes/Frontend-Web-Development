import View from "./view.js";
import Store from "./store.js";

const players = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "turquoise",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "yellow",
  },
];

function init() {
  const view = new View();
  const store = new Store("live-t3-storage-key", players);

  // now here we can use addEventListener using store object!
  store.addEventListener("statechange", () => {
    view.render(store.game, store.stats);
  });
  // by using this method above, we can now remove the call view.render() from methods like resetEvent and others 5h:42min

  window.addEventListener("storage", () => {
    // to test:
    console.log("State changed from antoher tab");

    view.render(store.game, store.stats);
  });

  // Initialize the view on the first page load
  view.render(store.game, store.stats);

  view.bindGameResetEvent((event) => {
    store.reset(); // when we call this method, it'll trigger the statechange event and therefore will call view.render()
  });

  view.bindNewRoundEvent((event) => {
    store.newRound(); // it'll also trigger statechange event
  });

  // Check state and update it
  view.bindPlayerMoveEvent((square) => {
    const existingMove = store.game.moves.find(
      (move) => move.squareId === +square.id
    );

    if (existingMove) {
      return;
    }

    // Advance to the next state by pushing a move to the moves array
    store.playerMove(+square.id); // since it's also updating the store, it'll trigger again statechange event and call view.render(), that's why we can remove the call
  });
}

window.addEventListener("load", init);
