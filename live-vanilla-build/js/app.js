const menu = document.querySelector(".menu");

// add an event listener that'll listen to a click event;
// and at this event we'll have a callback function which will get an event object
// this event object has a target that represent the menu we've declared above as a const menu
menu.addEventListener("click", (event) => {
  console.log(event.target);
});
