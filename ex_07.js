document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".cart-btn").innerHTML = "CHANGE COLOR";

  function background_color() {
    const s_rand = "#" + Math.floor(Math.random() * 100000).toString(16);
    document.body.style.backgroundColor = s_rand;
  }
  document
    .querySelector(".cart-btn")
    .addEventListener("click", background_color);
});
