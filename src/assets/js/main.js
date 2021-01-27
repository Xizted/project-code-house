const init = (() => {
  /*====================================
     Referecias al DOM
  ====================================*/
  const navbar = document.querySelector("nav");
  const fixedTop = document.querySelector(".fixedTop");
  const navbarPosition = navbar.getBoundingClientRect();

  /*====================================
     Eventos
  ====================================*/

  /*====================================
     Ocultar Preloader
  ====================================*/

  window.onload = () => {
    const preloader = document.querySelector("#preloader");
    const body = document.querySelector("body");
    preloader.classList.add("animate__animated", "animate__fadeInOut");
    body.classList.remove("hidden-body");
    preloader.classList.add("hidden");
    new WOW().init();
  };

  /*====================================
     Animacion del navbar
  ====================================*/

  window.addEventListener("scroll", () => {
    if (navbarPosition.top + window.pageYOffset > 50) {
      fixedTop.classList.add("top-nav-collapse");
    } else {
      fixedTop.classList.remove("top-nav-collapse");
    }
  });
})();
