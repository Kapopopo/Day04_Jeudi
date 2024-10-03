document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("resize", function () {
    alert("la taille compte");
  });

  let phone = document.querySelector('img[src="../Iphone22.png"]');

  if (phone) {
    phone.addEventListener("mouseover", function () {
      alert("joli nn");
    });
  }
});
