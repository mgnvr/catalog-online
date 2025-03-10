<template>
  <div>
    <AppHeader ref="header"></AppHeader>
    <div class="video">
      <img :src="this.publicPath + 'assets/logo.png'" alt="DriV3R" height="36px" class="radio_logo hidden">
      <div class="button maximize"></div>
      <video id="video" width="100%" autoplay loop muted>
        <source :src="this.publicPath + 'assets/loop.mp4'" type="video/mp4">
      </video>

      <div class="audio">
        <audio src="https://stream.nightride.fm/nightride.mp3" />
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "about",
  components: { AppHeader, AppFooter },
  data() {
    return {
      sitename: "Driv3r - Каталог игр",
      publicPath: process.env.BASE_URL
    };
  },
  mounted() {
    audiojs.events.ready(function () {
      var as = audiojs.createAll();
    });

    var video = document.querySelector(".video");
    var logo = document.querySelector(".radio_logo");
    var button = document.querySelector(".button");
    button.addEventListener("click", function () {
      if (button.classList.contains("maximize")) {
        button.classList.remove("maximize");
        button.classList.add("minimize");
        logo.classList.remove("hidden");
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      } else {
        button.classList.remove("minimize");
        button.classList.add("maximize");
        logo.classList.add("hidden");
        document.exitFullscreen();
      }
    });
  }
}
</script>

<style>
.audiojs {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -18px;
  margin-left: -18px;
  width: 36px;
  background-color: transparent;
  background-image: none;
  box-shadow: none;
  z-index: 10000;
}

.audiojs .scrubber,
.audiojs .time {
  display: none;
}

.audiojs .play-pause {
  border: none;
}

.video {
  position: relative;
}

video {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  user-select: none;
}

.button {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  cursor: pointer;
  z-index: 100;
}

.button.minimize::after,
.button.maximize::after {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
}

.button.maximize::after {
  background: url("/catalog/assets/maximize.svg") center no-repeat;
}

.button.minimize::after {
  background: url("/catalog/assets/minimize.svg") center no-repeat;
}

.hidden {
  display: none;
}

.radio_logo {
  position: absolute;
  top: 28px;
  left: 50%;
  height: 36px;
  margin-left: -56px;
  z-index: 10000;
}
</style>