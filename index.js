const BASE_URL = "https://api.vimeo.com";
const ACCESS_TOKEN = "ba02d68fa14f45c51ac7f2c42f41d6e5";
const videoId = "824804225";

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
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
  speed: 800,
  grabCursor: true,
  simulateTouch: true,
});

async function getVideoInfo(videoId) {
  try {
    const response = await axios.get(`${BASE_URL}/videos/${videoId}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching video data:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const videoData = await getVideoInfo(videoId);

  for (let i = 0; i < 8; i++) {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    const iframe = document.createElement("iframe");
    iframe.src = "https://player.vimeo.com/video/824804225";
    iframe.width = "400";
    iframe.height = "400";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";

    slide.appendChild(iframe);

    swiper.appendSlide(slide);
  }
});
