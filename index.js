const BASE_URL = "https://player.vimeo.com";
const videoId = "824804225";

const swiper = new Swiper(".swiper", {
  loop: false,
  slidesPerGroup: 1,
  speed: 800,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".video-slider",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    780: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener("DOMContentLoaded", async function () {

  for (let i = 0; i < 8; i++) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.setAttribute("data-video", `${BASE_URL}/video/${videoId}`);

    const iframe = document.createElement("iframe");
    iframe.src = `${BASE_URL}/video/${videoId}`;
    iframe.width = "400";
    iframe.height = "400";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";

    slide.appendChild(iframe);

    swiper.appendSlide(slide);
  }

});



