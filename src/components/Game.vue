<template>
  <div>
    <AppHeader></AppHeader>

    <section>
      <div class="container">
        <ButtonHome></ButtonHome>
        <div class="container-game">
          <div class="game-info">
            <h1 class="game-title">{{ game.title }}</h1>
            <p class="game-text"><span class="game-genre">Об игре: </span>{{ game.description }}</p>
            <p><span class="game-genre">Жанр: </span>{{ game.genre }}</p>
            <p v-show="game.isLocalMultiplayer"><b>*</b> Доступен локальный кооператив (игра на одном телевизоре)</p>
            <p class="game-tag"><span class="game-genre">Тег: </span> <span class="card-genre">{{ game.tag }}</span></p>
          </div>
        </div>

        <div class="gallery-swiper">
          <div class="swiper main-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img :src="game.image1" :alt="game.title"></div>
              <div class="swiper-slide"><img :src="game.image2" :alt="game.title"></div>
              <div class="swiper-slide"><img :src="game.image3" :alt="game.title"></div>
              <div class="swiper-slide swiper-slide-youtube" @click="playVideo()">
                <youtube :video-id="getId()" ref="youtube" :player-vars="playerVars"></youtube>
              </div>
            </div>
          </div>

          <div thumbsSlider="" class="swiper thumbs">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img :src="game.image1" :alt="game.title"></div>
              <div class="swiper-slide"><img :src="game.image2" :alt="game.title"></div>
              <div class="swiper-slide"><img :src="game.image3" :alt="game.title"></div>
              <div class="swiper-slide swiper-slide-video">
                <div class="swiper-video-thumb">
                </div>
                <!-- <img :src="`https://img.youtube.com/vi/${getId()}/hqdefault.jpg`" :alt="game.title"> -->
                <img :src="game.image1" :alt="game.title">
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>

        <h2>Похожие игры</h2>
        <div class="wrapper">
          <div class="item" v-for="game in showSimilarGames" :key="game.id">
            <router-link @click.native="changeGame(game)" tag="div" :to="{ name: 'Id', params: { id: game.id } }"
              class="card" title="Перейти к игре" :style="{
                  'background-image':
                    `linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), ` +
                    'url(' +
                    game.thumbnail +
                    ')',
                }">
              <div class="card__header">
                <button :class="{ liked: wishlistIds.includes(game.id) }" class="like"
                  @click.stop="putLike($event, game.id)" title="Добавить в избранное / Удалить из избранного">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                      fill="#fff" />
                  </svg>
                </button>
              </div>
              <div v-once class="card-desc">
                <h3 v-text="game.title" class="game-title"></h3>
                <p v-text="game.description" class="game-desc"></p>
                <div class="card__footer">
                  <div class="card-genre" v-text="game.genre"></div>
                  <div class="card-genre card-tag" v-text="game.tag"></div>
                  <div v-show="game.isLocalMultiplayer" class="card-genre card-genre-coop">
                    на двоих
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import ButtonHome from "@/components/ButtonHome.vue";

export default {
  components: {
    AppHeader, AppFooter, ButtonHome
  },
  data() {
    return {
      sitename: "Driv3r - Каталог игр",
      publicPath: process.env.BASE_URL,
      game: "",
      wishlistIds: [],
      gameId: null,
      playerVars: {
        controls: 1
      }
    };
  },
  methods: {
    putLike: function (event, gameId) {
      this.gameId = gameId;
      this.liked = !this.liked;
      if (this.liked) {
        navigator.vibrate(100);
      }
    },
    changeGame(game) {
      this.game = game;
    },
    playVideo() {
      if (this.player.playing) {
        this.player.stopVideo()
      } else {
        this.player.playVideo()
      }
    },
    getId() {
      return this.$youtube.getIdFromUrl(this.game.video)
    }
  },
  mounted() {
    this.$store.dispatch("loadGames");
    this.wishlistIds = this.$store.state.wishlistIds;

    const thumbnails = new Swiper(".thumbs", {
      loop: true,
      spaceBetween: 8,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const swiper = new Swiper('.main-swiper', {
      pagination: {
        el: '.swiper-pagination',
        type: "bullets",
      },
      direction: 'horizontal',
      loop: true,
      spaceBetween: 8,
      grabCursor: true,
      breakpoints: {},
      keyboard: {
        enabled: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: thumbnails,
      },
    });
    swiper.on('slideChange', function (e) {
    });
  },
  created: function () {
    this.game = this.$store.state.games.find((game) => {
      return game.id == this.$route.params.id;
    });
  },
  computed: {
    showSimilarGames() {
      return this.$store.getters.showSimilarGamesByPlatform(this.game.id, this.game.category, this.game.tag);
    },
    liked: {
      get() {
        return this.$store.state.wishlistIds.includes(this.gameId);
      },
      set(val) {
        this.$store.commit(val ? "addGame" : "removeGame", this.gameId);
      },
    },
    player() {
      return this.$refs.youtube.player
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm._backRoute = from.path;
    })
  },
};
</script>
