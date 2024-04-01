src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js";
integrity =
  "sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==";
crossorigin = "anonymous";
referrerpolicy = "no-referrer";

type =
  "text/javascript" >
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".main-header").addClass("has-bg");
    } else {
      $(".main-header").removeClass("has-bg");
    }
  });

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>;
AOS.init();
