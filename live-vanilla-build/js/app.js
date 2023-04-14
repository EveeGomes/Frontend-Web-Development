// use the querySelector and add a class name so it'll select any element in the html whithin that class
const menu = document.querySelector(".menu");
const menuItems = menu.querySelector(".items");

// now, once we see that the button on the menu has been clicked, we'll add some functionality
// check video @1h:30m till ~33min for explanation on how to come up with that solution
menu.addEventListener("click", (event) => {
  menuItems.classList.toggle("hidden");
});
