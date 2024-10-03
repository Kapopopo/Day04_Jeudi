document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("resize", function () {
    alert("Sizes matters");
  });

  let phone = document.querySelector('img[src="../Iphone22.png"]');

  if (phone) {
    phone.addEventListener("mouseover", function () {
	alert("Pretty, isn't it?");
    });
  }
});
