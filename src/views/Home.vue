<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      <div class="container container-select">
        <div v-show="selectedPlatform !== 'мои'" class="select-container">
          <div class="select-genre-container">

            <vs-select v-show="selectedPlatform == 'pcvr'" class="select-genre" label="Выбрать жанр"
              v-model="selectedGenre">
              <vs-option label="все" value="все"> все </vs-option>
              <vs-option v-for="(genre, index) in pcvrGenres" :key="index" :label="genre" :value="genre">
                {{ genre }}
              </vs-option>
            </vs-select>

            <vs-select v-show="selectedPlatform == 'oq2'" class="select-genre" label="Выбрать жанр"
              v-model="selectedGenre">
              <vs-option label="все" value="все"> все </vs-option>
              <vs-option v-for="(genre, index) in oq2Genres" :key="index" :label="genre" :value="genre">
                {{ genre }}
              </vs-option>
            </vs-select>

            <vs-select v-show="selectedPlatform == 'psvr'" class="select-genre" label="Выбрать жанр"
              v-model="selectedGenre">
              <vs-option label="все" value="все"> все </vs-option>
              <vs-option v-for="(genre, index) in psvrGenres" :key="index" :label="genre" :value="genre">
                {{ genre }}
              </vs-option>
            </vs-select>

            <vs-select v-show="selectedPlatform == 'ps5'" class="select-genre" label="Выбрать жанр"
              v-model="selectedGenre">
              <vs-option label="все" value="все"> все </vs-option>
              <vs-option v-for="(genre, index) in ps5Genres" :key="index" :label="genre" :value="genre">
                {{ genre }}
              </vs-option>
            </vs-select>

            <vs-select class="select-genre" label="Сортировка" v-model="selectedSort">
              <vs-option label="по умолчанию" value="default">
                по умолчанию
              </vs-option>
              <vs-option label="по названию (а-я)" value="ascending"> по названию (а-я) </vs-option>
              <vs-option label="по названию (я-а)" value="descending"> по названию (я-а) </vs-option>
              <vs-option label="по жанру" value="bygenre"> по жанру </vs-option>
              <vs-option label="по тегу" value="bytag"> по тегу </vs-option>

            </vs-select>
          </div>
          <div class="select-item select-item--checkbox">
            <vs-checkbox label-before v-model="isChild" @click="setChild">
              Для детей
            </vs-checkbox>
          </div>
          <div v-show="selectedPlatform == 'pcvr' || selectedPlatform == 'oq2' || selectedPlatform == 'psvr'"
            class="select-item select-item--checkbox">
            <vs-checkbox label-before v-model="isVeryChild" @click="setVeryChild">
              Для самых маленьких
            </vs-checkbox>
          </div>
          <div v-show="selectedPlatform == 'ps5'" class="select-item select-item--checkbox">
            <vs-checkbox label-before v-model="isLocalMultiplayer">
              На двоих
            </vs-checkbox>
          </div>
        </div>
        <div :class="{ 'container-input-only': selectedPlatform == 'мои' }" class="container-input show"
          ref="containerInput">
          <vs-input placeholder="Поиск игры..." type="text" v-model="search" class="search-input" autocomplete="off"
            @input="closeSearchGame" v-on:keyup.esc="clearSearch">
          </vs-input>
          <div class="search-button" ref="closeSearch" @click="clearSearch">
            <div class="search-icon">
            </div>
          </div>
        </div>
      </div>
    </div>

    <section>
      <back-to-top visibleoffset="500">
        <img :src="this.publicPath + 'assets/up.svg'" alt="Наверх" width="15px" height="15px" title="Наверх" />
      </back-to-top>

      <div class="container">
        <vk-tabs align="justify" v-on:click.native="changePlatform($event)">
          <vk-tabs-item v-bind:title="'PCVR'">
            <div v-if="showGamesByPCVR.length !== 0" class="wrapper">
              <div class="item" v-for="game in showGamesByPCVR" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), ` +
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
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div v-else-if="showGamesByPCVR.length == 0 && search.length == 0" class="wrapper--empty">
              <img :src="this.publicPath + 'assets/loading.svg'" alt="Загрузка..." width="150" />
            </div>
            <div v-else class="wrapper--empty">
              <img class="empty-loupe" :src="this.publicPath + 'assets/loupe.png'" alt="Лупа" width="150" height="150" />
              <p class="empty-start">По вашему запросу ничего не найдено</p>
              <p>Есть и другие игры, тоже интересные</p>
            </div>
          </vk-tabs-item>
          <vk-tabs-item v-bind:title="'OQ2'">
            <div v-if="showGamesByOQ2.length !== 0" class="wrapper">
              <div class="item" v-for="game in showGamesByOQ2" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), ` +
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
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div v-else-if="showGamesByOQ2.length == 0 && search.length == 0" class="wrapper--empty">
              <img :src="this.publicPath + 'assets/loading.svg'" alt="Загрузка..." width="150" />
            </div>
            <div v-else class="wrapper--empty">
              <img class="empty-loupe" :src="this.publicPath + 'assets/loupe.png'" alt="Лупа" width="150" height="150" />
              <p class="empty-start">По вашему запросу ничего не найдено</p>
              <p>Есть и другие игры, тоже интересные</p>
            </div>
          </vk-tabs-item>
          <vk-tabs-item v-bind:title="'PSVR'">
            <div v-if="showGamesByPSVR.length !== 0" class="wrapper">
              <div class="item" v-for="game in showGamesByPSVR" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), ` +
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
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div v-else class="wrapper--empty">
              <img class="empty-loupe" :src="this.publicPath + 'assets/loupe.png'" alt="Лупа" width="150" height="150" />
              <p class="empty-start">По вашему запросу ничего не найдено</p>
              <p>Есть и другие игры, тоже интересные</p>
            </div>
          </vk-tabs-item>
          <vk-tabs-item v-bind:title="'PS5'">
            <div v-if="showGamesByPS5.length !== 0" class="wrapper">
              <div class="item" v-for="game in showGamesByPS5" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), ` +
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
            <div v-else class="wrapper--empty">
              <img class="empty-loupe" :src="this.publicPath + 'assets/loupe.png'" alt="Лупа" width="150" height="150" />
              <p class="empty-start">По вашему запросу ничего не найдено</p>
              <p>Есть и другие игры, тоже интересные</p>
            </div>
          </vk-tabs-item>
          <vk-tabs-item v-bind:title="'МОИ'">
            <div v-if="isEmpty" class="wrapper wrapper--empty">
              <img class="empty-heart" :src="this.publicPath + 'assets/heart.png'" alt="Сердце" width="150"
                height="150" />
              <p class="empty-start">Список избранного пуст</p>
              <p class="empty-offer">Начните добавлять любимые игры, чтобы не потерять их</p>
            </div>
            <div v-else-if="!isEmpty && showLikedGames.length == 0" class="wrapper--empty">
              <img class="empty-loupe" :src="this.publicPath + 'assets/loupe.png'" alt="Лупа" width="150" height="150" />
              <p class="empty-start">По вашему запросу ничего не найдено</p>
              <p>Есть и другие игры, тоже интересные</p>
            </div>
            <div v-else class="wrapper">
              <div class="item" v-for="game in showLikedGames" :key="game.id">
                <router-link tag="div" :to="{ name: 'Id', params: { id: game.id } }" class="card" title="Перейти к игре"
                  :style="{
                    'background-image':
                      `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.35) 75%, rgba(0, 0, 0, 0.65) 100%), ` +
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
          </vk-tabs-item>
        </vk-tabs>
      </div>
    </section>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "home",
  components: { AppHeader, AppFooter },
  data() {
    return {
      sitename: "Driv3r - Каталог игр",
      publicPath: process.env.BASE_URL,
      search: "",
      category: "",
      genre: "все",
      games: [],
      pcvrGenres: [
        "симулятор",
        "шутер",
        "экшн",
        "музыкальная",
        "хоррор",
        "спорт",
        "квест",
        "файтинг",
        "песочница",
        "стратегия",
        "головоломка",
        "аттракцион",
        "приключение",
        "творчество",
        "многопользовательская",
      ],
      oq2Genres: [
        "симулятор",
        "аркада",
        "экшн",
        "шутер",
        "хоррор",
        "гонка",
        "спорт",
        "квест",
        "файтинг",
        "песочница",
        "стратегия",
        "приключение",
        "аттракцион",
        "творчество",
        "музыкальная",
      ],
      psvrGenres: [
        "симулятор",
        "экшн",
        "аркада",
        "гонка",
        "хоррор",
        "квест",
        "песочница",
        "аттракцион",
        "приключение",
        "многопользовательская",
      ],
      ps5Genres: [
        "экшн",
        "шутер",
        "аркада",
        "гонка",
        "спорт",
        "файтинг",
        "песочница",
        "симулятор",
        "стратегия",
        "приключение",
        "интерактивное кино",
        "многопользовательская",
      ],
      isOpened: false,
      selectedGenre: "все",
      selectedPlatform: "pcvr",
      selectedSort: "default",
      isChild: false,
      isVeryChild: false,
      isLocalMultiplayer: false,
      end: false,
      wishlistIds: [],
      gameId: null,
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
    closeSearchGame: function () {
      if (this.search == "") {
        this.$refs.closeSearch.classList.remove("active");
      } else {
        this.$refs.closeSearch.classList.add("active");
      }
    },
    setChild: function () {
      this.isVeryChild = false;
    },
    setVeryChild: function () {
      this.isChild = false;
    },
    clearSearch: function () {
      this.search = "";
      this.$refs.closeSearch.classList.remove("active");
    },
    changePlatform: function (evt) {
      if (evt.target.tagName.toLowerCase() === "a") {
        this.selectedPlatform = evt.target.text
          .replace(/\s.*/, "")
          .toLowerCase();
        this.selectedGenre = "все";
      }
    },
    clearids: function () {
      this.$store.commit("clearLikedGames");
      this.wishlistIds = this.$store.state.wishlistIds;
    }
  },
  watch: {
    search(newQuery) {
      this.search = this.search.toLocaleLowerCase();
    },
  },
  mounted() {
    this.$store.dispatch("loadGames");

    if (this.$store.state.wishlistIds.length == 0) {
      this.isEmpty = !this.isEmpty;
    }
    this.wishlistIds = this.$store.state.wishlistIds;

    var _this = this;

    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
      threshold: 15
    });
    // start listening to device motion
    myShakeEvent.start();
    // register a shake event
    window.addEventListener("shake", shakeEventDidOccur, false);
    //shake event callback
    function shakeEventDidOccur() {
      _this.clearids();
    }
  },
  created() { },
  computed: {
    liked: {
      get() {
        return this.$store.state.wishlistIds.includes(this.gameId);
      },
      set(val) {
        this.$store.commit(val ? "addGame" : "removeGame", this.gameId);
      },
    },
    showGames() {
      return this.$store.getters.showGames(
        this.search,
        this.selectedPlatform,
        this.selectedGenre,
        this.isChild,
        this.isVeryChild,
        this.selectedSort
      );
    },
    showGamesByPCVR() {
      return this.$store.getters.showPCVRGames(
        this.search,
        this.selectedGenre,
        this.isChild,
        this.isVeryChild,
        this.selectedSort
      );
    },
    showGamesByOQ2() {
      return this.$store.getters.showOQ2Games(
        this.search,
        this.selectedGenre,
        this.isChild,
        this.isVeryChild,
        this.selectedSort
      );
    },
    showGamesByPSVR() {
      return this.$store.getters.showPSVRGames(
        this.search,
        this.selectedGenre,
        this.isChild,
        this.isVeryChild,
        this.selectedSort
      );
    },
    showGamesByPS5() {
      return this.$store.getters.showPS5Games(
        this.search,
        this.selectedGenre,
        this.isChild,
        this.isLocalMultiplayer,
        this.selectedSort
      );
    },
    showLikedGames() {
      return this.$store.getters.wishlist(this.search);
    },
    isEmpty: {
      get() {
        return !this.$store.state.wishlistIds.length;
      },
      set(val) {
        console.log(val);
      }
    },
    showActivePlatformGenres() {
      return this.$store.getters.showGenres(this.selectedPlatform);
    },
  },
};
</script>
