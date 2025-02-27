(function ($) {
  "use strict";

  // MENU
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - 0;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });

  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
})(window.jQuery);

window.addEventListener("scroll", function () {
  const scrollTopButton = document.querySelector(".backtop");
  if (window.scrollY > 200) {
    scrollTopButton.style.opacity = "1";
  } else {
    scrollTopButton.style.opacity = "0";
  }
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion, index) => {
  const header = accordion.querySelector(".accordion__header");
  const content = accordion.querySelector(".accordion__content");
  const icon = accordion.querySelector("#accordion-icon");

  header.addEventListener("click", () => {
    const isOpen = content.style.height === `${content.scrollHeight}px`;

    accordions.forEach((a, i) => {
      const c = a.querySelector(".accordion__content");
      const ic = a.querySelector("#accordion-icon");

      c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
      ic.classList.toggle("ri-add-line", i !== index || !isOpen);
      ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
    });
  });
});
