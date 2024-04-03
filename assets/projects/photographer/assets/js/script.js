type =
  "text/javascript" >
  $(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 200) {
        $(".header").addClass("has-bg");
      } else {
        $(".header").removeClass("has-bg");
      }
    });

    AOS.init();

    // JavaScript for responsive navigation menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });

    // JavaScript for video slider navigation
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function (manual) {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    };

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });

    // JavaScript for slide transition
    var btn = document.querySelectorAll(".btn");
    var slide = document.getElementById("slide");

    btn.forEach(function (element, index) {
      element.onclick = function () {
        var translateValue = index * -800;
        slide.style.transform = "translateX(" + translateValue + "px)";
        btn.forEach(function (btnElement) {
          btnElement.classList.remove("active");
        });
        this.classList.add("active");
      };
    });
  });
