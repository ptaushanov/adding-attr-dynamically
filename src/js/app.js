import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const price =  document.querySelector(".price").innerText
  document.querySelector(".product").setAttribute("data-price", price)

});
