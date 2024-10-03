document.addEventListener("DOMContentLoaded", function () {
  let element = document.getElementById("tag");
  let img = document.querySelector('img[src="../Iphone22.png"]');
  let upup = document.getElementById("addToCart");
  let cartCount = 0;

  document.getElementById("description").innerHTML =
    "<p>Never miss that perfect shot again.<br><br>Designed to revolutionise video and photography, with beyond cinematic 16K resolution.<br><br>Get yours now !</p>";
  document.getElementById("productName").innerHTML = "Samsung 22";
  document.getElementById("price").innerHTML = "890€";
  img.src = "Samsung22.png";
  element.remove();

  document.getElementById(
    "addToCart"
  ).innerHTML += `<h3>In cart : ${cartCount}</h3>`;

  upup.addEventListener("click", function () {
    cartCount++;
    document.getElementById(
      "addToCart"
    ).innerHTML += `<h3>In cart : ${cartCount}</h3>`;
  });
});
