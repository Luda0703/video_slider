const BASE_URL = "https://api.vimeo.com";
const ACCESS_TOKEN = "ba02d68fa14f45c51ac7f2c42f41d6e5";
const videoId = "824804225";

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  // spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
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
  speed: 800,
  grabCursor: true,
  zoom: true,
 
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
    slide.setAttribute("data-video", `https://player.vimeo.com/video/${videoId}`);

    const iframe = document.createElement("iframe");
    iframe.src = `https://player.vimeo.com/video/${videoId}`;
    iframe.width = "400";
    iframe.height = "400";
    iframe.allowFullscreen = true;
    iframe.frameBorder = "0";

    slide.appendChild(iframe);

    swiper.appendSlide(slide);
  }

  const popupOverlay = document.querySelector('.popup-overlay');
  const videoContainer = document.querySelector('.video-container');
  const closePopupBtn = document.querySelector('.close-popup');

  swiper.on('click', '.swiper-slide', function() {
    const videoUrl = this.getAttribute('data-video');
    const videoIframe = `<iframe src="${videoUrl}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
    videoContainer.innerHTML = videoIframe;
    popupOverlay.style.display = 'flex';
  });

  closePopupBtn.addEventListener('click', function() {
    videoContainer.innerHTML = '';
    popupOverlay.style.display = 'none';
  });

  // Добавляем обработчик события для клика по текущему слайду в поп-апе
  swiper.on('click', '.swiper-slide', function() {
    const videoUrl = this.getAttribute('data-video');
    const videoIframe = `<iframe src="${videoUrl}?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
    videoContainer.innerHTML = videoIframe;
  });
});






