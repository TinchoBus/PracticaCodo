// Mostrar el botón cuando el usuario baja 300px desde el top
window.onscroll = function () {
  const btn = document.getElementById("btnVolverArriba");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Subir al top con scroll suave
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnVolverArriba");
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
